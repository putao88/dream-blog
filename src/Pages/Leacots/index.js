/*
 * @Author: houxiaoling 
 * @Date: 2020-08-06 10:21:35 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2021-01-06 17:33:57
 * 留言组件
 */
import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty, Input, Button  } from 'antd';
import { api } from '../../models/api'
import { formateLeacots } from '../../models/utils'
import './index.css'
import Comments from '../../Components/Comments'
import CommentEditor from '../../Components/CommentEditor'
const { TextArea } = Input;


export default class Leacots extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leacotsList:[],
            currentPage:1,
            pageSize:5,
            total:0,
        }
    }
    
    componentDidMount() {
        this.getAllLeacots()
    }

    getAllLeacots = () => {
        api.getAllLeacots({}, res => {
            if (res.code === 200) {
				let data = formateLeacots(res.data)
                this.setState({
                    leacotsList:data,
                    total: res.data.length,
                })
            }
        })
    }

    
    paginationChange = ( page, pageSize ) => {
        this.setState({
            currentPage: page
        })
    }

    changeData = (data) => {
        this.setState({
            leacotsList:data
        })
    }

    render () {
        const { leacotsList, currentPage, pageSize, total } = this.state
        //分页后的内容
        const leacotsData = leacotsList.slice((currentPage-1)*pageSize,(currentPage-1)*pageSize+pageSize)
        return (
            <div className='content whisper-content leacots-content'>
                <div className='cont w1000'>
                    <div className='whisper-list'>
                        <div className='item-box'>
                            <div className='review-version'>
                                <div className='form-box'>
                                    <img className='banner-img' src='assets/img/liuyan.jpg' />
                                    <div style={{margin:'70px 0'}}>
                                        <CommentEditor
											leacots={null}
                                            parentId={0} 
                                            dataSource={leacotsList} 
                                            changeDataSource={this.changeData}
                                        />
                                    </div>
                                    <div className='volume'>
                                        全部留言
                                        <span>{total}</span>
                                    </div>
                                    <div className='list-cont'>
                                        {
                                            leacotsData.length ?
                                                leacotsData.map(leacots => {
                                                    return (
                                                        <Comments 
                                                            key={leacots.id} 
                                                            leacots={leacots} 
                                                            dataSource={leacotsList} 
                                                            changeData = {this.changeData}
                                                        />
                                                    )
                                                })
                                            :
                                            <Empty />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
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
