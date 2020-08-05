/*
 * @Author: houxiaoling 
 * @Date: 2020-08-05 16:16:26 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-05 18:06:09
 * 微语
 */
import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty  } from 'antd';
import {
    TableOutlined,
    LikeOutlined,
    MessageOutlined,
    DownOutlined,
  } from '@ant-design/icons';
import { api } from '../../models/api'
import './index.css'

export default class Whisper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            whisperList:[],
            currentPage:1,
            pageSize:5,
            total:0,
        }
    }

    componentDidMount() {
        this.getAllWhisper()
    }

    /* 根据类型搜索文章 */
    getAllWhisper = () => {
        api.getAllWhisper({}, res => {
            if (res.code === 200) {
                this.setState({
                    whisperList: res.data,
                    total: res.data.length,
                })
            }
        })
    }

    paginationChange = ( page,pageSize ) => {
        this.setState({
            currentPage: page
        })
    }

    render () {
        const { whisperList, currentPage, pageSize, total } = this.state
        return (
            <div className='content whisper-content'>
                <div className='cont'>
                    <div className='whisper-list'>
                        {
                            whisperList.map(whisper => {
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
                                                <img src='assets/img/wy_img1.jpg' />
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
                                                <p className='off'>
                                                    <span>展开</span>
                                                    <DownOutlined />
                                                </p>
                                            </div>
                                        </div>
                                        <div className='review-version'></div>
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
