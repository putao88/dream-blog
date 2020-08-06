/*
 * @Author: houxiaoling 
 * @Date: 2020-08-06 10:21:35 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-06 11:53:53
 * 留言组件
 */
import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty, Input, Button  } from 'antd';
import { api } from '../../models/api'
import './index.css'
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
                                    <div className='form'>
                                        <TextArea rows={3} placeholder='既然来了，就说几句'/>
                                        <Button type="primary" style={{marginTop:'20px',width:'100px',height:'40px'}}>确定</Button>
                                    </div>
                                    <div className='volume'>
                                        全部留言
                                        <span>{total}</span>
                                    </div>
                                    <div className='list-cont'>
                                        {
                                            leacotsData.map(leacots => {
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
                        </div>
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
