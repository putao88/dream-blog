/*
 * @Author: houxiaoling 
 * @Date: 2020-08-05 16:16:26 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-06 17:16:18
 * 微语
 */
import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty, Input, Button  } from 'antd';
import { TableOutlined, LikeOutlined, MessageOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { api } from '../../models/api'
import './index.css'

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
        }
    }

    componentDidMount() {
        this.getAllWhisper()
        this.getAllLeacots()
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

    getAllLeacots = () => {
        api.getAllLeacots({}, res => {
            if (res.code === 200) {
                this.setState({
                    leacotsList: res.data,
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

    openLeacots = (id) => {
        const { whisperList } = this.state
        whisperList.map(item => {
            if (id === item.id) {
                item.open = !item.open
            }
        })
        this.setState({
            whisperList
        })
    }

    render () {
        const { whisperList, currentPage, pageSize, total, leacotsList } = this.state
        //分页后的内容
        const whispers = whisperList.slice((currentPage-1)*pageSize,(currentPage-1)*pageSize+pageSize)
        return (
            <div className='content whisper-content'>
                <div className='cont'>
                    <div className='whisper-list'>
                        {
                            whispers.map((whisper,index) => {
                                return (
                                    <div className='item-box' key={whisper.id}>
                                        <div className='item'>
                                            <div className='whisper-title'>
                                                <TableOutlined />
                                                <i className='layui-icon layui-icon-date'></i>
                                                <span className='hour'>{whisper.time}</span>
                                                <span className='date'>{whisper.date}</span>
                                            </div>
                                            <p className='text-cont'>
                                              {whisper.content}
                                            </p>
                                            <div className='img-box'>
                                                <img src='assets/img/wy_img2.jpg' />
                                                <img src='assets/img/wy_img3.jpg' />
                                                <img src='assets/img/wy_img4.jpg' />
                                            </div>
                                            <div className='op-list'>
                                                <p className='like'>
                                                    <LikeOutlined />
                                                    <span>{whisper.like_count}</span>
                                                </p>
                                                <p className='edit'>
                                                    <MessageOutlined />
                                                    <span>{whisper.comment_count}</span>
                                                </p>
                                                <p className='off' onClick= {() => this.openLeacots(whisper.id)}>
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
                                                <TextArea rows={3} />
                                                <Button type="primary" style={{marginTop:'20px',width:'100px',height:'40px'}}>确定</Button>
                                            </div>
                                            <div className='list-cont'>
                                                {
                                                    leacotsList.map(leacots => {
                                                        return (
                                                            <div className='cont' key={leacots.id}>
                                                                <div className='img'>
                                                                    <img src='assets/img/header.png' />
                                                                </div>
                                                                <div className='text'>
                                                                    <p className='tit'>
                                                                        <span className='name'>{leacots.name}</span>
                                                                        <span className='data'>{leacots.time}</span>
                                                                    </p>
                                                                    <p className='ct'>
                                                                        {leacots.content}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* 分页 */}
                    <div style={{textAlign:'center'}}>
                        <Pagination current={currentPage} defaultPageSize={pageSize} total={total}
                            onChange = {this.paginationChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
