/*
 * @Author: houxiaoling 
 * @Date: 2020-08-06 15:43:11 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-06 16:05:25
 * 关于我
 */
import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty  } from 'antd';
import { api } from '../../models/api'
import './index.css'


export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className='about-content'>
                <div className='w1000'>
                    <div className='item info'>
                        <div className='title'>
                            <h3>我的介绍</h3>
                        </div>
                        <div className='cont'>
                            <img src='assets/img/xc_img1.jpg' />
                            <div className='per-info'>
                                <p>
                                    <span>葡萄</span><br />
                                    <span>前端工程师</span><br />
                                    <span>打游戏，打羽毛球</span><br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='item tool'>
                        <div className='title'>
                            <h3>我的技能</h3>
                        </div>
                        <Row  justify="space-around">
                            <Col span={4}>
                                <img src='assets/img/gr_img2.jpg' />
                            </Col>
                            <Col span={4}>
                                <img src='assets/img/gr_img3.jpg' />
                            </Col>
                            <Col span={4}>
                                <img src='assets/img/gr_img4.jpg' />
                            </Col>
                            <Col span={4}>
                                <img src='assets/img/gr_img5.jpg' />
                            </Col>
                        </Row>
                    </div>
                    <div className='item contact'>
                        <div className='title'>
                            <h3>联系方式</h3>
                            <div className='cont'>
                                <img src='assets/img/wchat.png' />
                                <div className='text'>
                                    <p>微信<span className='WeChat'>15773281560</span></p>
                                    <p>手机<span className='WeChat'>15773281560</span></p>
                                    <p>邮箱<span className='WeChat'>15773281560@163.com</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
