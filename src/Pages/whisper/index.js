/*
 * @Author: houxiaoling 
 * @Date: 2020-08-05 16:16:26 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2021-01-07 14:58:08
 * 微语
 */
import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty, Input, Button  } from 'antd';
import { TableOutlined, LikeOutlined, MessageOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { api } from '../../models/api'
import { formateLeacots } from '../../models/utils'


import './index.css'
import CommentEditor from '../../Components/CommentEditor'
import Comments from '../../Components/Comments'
import Markdown from 'react-markdown';




const { TextArea } = Input;
export default class Whisper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            whisperList:[],
            currentPage:1,
            pageSize:3,
            total:0,
			leacotsList:[],
			editHeight: document.body.offsetHeight - 60,
        }
    }

    componentDidMount() {
        this.getAllWhisper()
    }

    getAllWhisper = () => {
        api.getAllWhisper({}, res => {
            if (res.code === 200) {
                let whisperList = []
                res.data.map(item => {
                    let obj = item
                    obj.open = false
                    whisperList.push(obj)
                })
                this.setState({
                    whisperList,
                    total: res.data.length,
                })
            }
        })
    }

    getLeacotsByParentId = (father_id) => {
        api.getLeacotsByParentId({ info: JSON.stringify({ father_id: father_id }) }, res => {
            if (res.code === 200) {
				let data = formateLeacots(res.data)
                this.setState({
                    leacotsList: data,
                })
            }
        })
    }

    paginationChange = ( page, pageSize ) => {
        this.setState({
            currentPage: page
        })
    }

    openLeacots = (id,isOpen) => {
        const { whisperList } = this.state
        whisperList.map(item => {
            if (id === item.id) {
                item.open = !item.open
            }
		})
		if (!isOpen) {
			this.getLeacotsByParentId(id)
		}
        this.setState({
            whisperList
        })
	}

	// 点赞
	addLikeCount = (id) => {
		const { whisperList } = this.state
		let row = {}
        whisperList.map(item => {
            if (id === item.id) {
				item.like_count = item.like_count + 1
                row = item
            }
		})
		api.updateWhisper({info:JSON.stringify(row)}, res => {
			this.setState({
				whisperList
			})
		})

	}
	
	changeData = (data) => {
		this.setState({
            leacotsList:data
        })

	}

	addWhisperConut = (id) =>{
		const { whisperList } = this.state
		// 改变微语的留言数量
		whisperList.map(item => {
            if (id === item.id) {
                item.comment_count = item.comment_count + 1
            }
		})
		this.setState({
			whisperList,
        })
	}

    render () {
        const { whisperList, currentPage, pageSize, total, leacotsList, editHeight } = this.state
        //分页后的内容
		const whispers = whisperList.slice((currentPage-1)*pageSize,(currentPage-1)*pageSize+pageSize)
        return (
            <div className='content whisper-content' style={{minHeight:editHeight}}>
                <div className='cont'>
                    <div className='whisper-list'>
                        {
                            whispers.length ?
                            whispers.map((whisper,index) => {
                                return (
                                    <div className='item-box' key={whisper.id}>
                                        <div className='item'>
                                            <div className='whisper-title'>
                                                <TableOutlined />
                                                <i className='layui-icon layui-icon-date'></i>
                                                <span className='hour'>{whisper.time.split(' ')[1]}</span>
                                                <span className='date'>{whisper.time.split(' ')[0]}</span>
                                            </div>
                                            <div className='text-cont'>
												<Markdown className='markdown-body' source={whisper.content} />
                                            </div>
                                            {/* <div className='img-box'>
                                                <img src='assets/img/wy_img2.jpg' />
                                                <img src='assets/img/wy_img3.jpg' />
                                                <img src='assets/img/wy_img4.jpg' />
                                            </div> */}
                                            <div className='op-list'>
                                                <p className='like' onClick= {() => this.addLikeCount(whisper.id)}>
                                                    <LikeOutlined />
                                                    <span>{whisper.like_count}</span>
                                                </p>
                                                <p className='edit'>
                                                    <MessageOutlined />
                                                    <span>{whisper.comment_count}</span>
                                                </p>
                                                <p className='off' onClick= {() => this.openLeacots(whisper.id, whisper.open)}>
                                                    {
                                                        whisper.open ?
                                                        <span>
                                                            <span>收起</span>
                                                            <UpOutlined />
                                                        </span>
                                                        :
                                                        <span>
                                                            <span>展开</span>
                                                            <DownOutlined />
                                                        </span>
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className='review-version' style= {{ display: whisper.open ? 'block':'none' }}>
                                            <div className='form'>
												<CommentEditor
													leacots={null}
													parentId={whisper.id} 
													dataSource={leacotsList} 
													changeDataSource={this.changeData}
													addWhisperConut={this.addWhisperConut}
													type="whisper"
													rowItem={whisper}
												/>
                                            </div>
                                            <div className='list-cont'>
                                                {
                                                    leacotsList.length ?
                                                        leacotsList.map(leacots => {
                                                            return (
																<Comments 
																	key={leacots.id} 
																	leacots={leacots} 
																	dataSource={leacotsList} 
																	changeData = {this.changeData}
																	addWhisperConut={this.addWhisperConut}
																	type="whisper"
																	rowItem={whisper}
																/>
                                                            )
                                                        })
                                                        :
                                                        <Empty />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <Empty />
                        }
                    </div>
                    {/* 分页 */}
                    <div style={{textAlign:'center',marginTop:'20px'}}>
                        <Pagination current={currentPage} defaultPageSize={pageSize} total={total}
                            onChange = {this.paginationChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
