/*
 * @Author: houxiaoling 
 * @Date: 2020-08-06 15:43:11 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-12 17:21:22
 * 关于我
 */
import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty, Card  } from 'antd';
import { GithubOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';
import { api } from '../../models/api'
import './index.css'

const { Meta } = Card;

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
                            <Col span={5}>
                                <Card
                                    hoverable
                                    cover={<img alt="example"  src="https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/img/header_logo.svg" />}
                                >
                                    <Meta title="React" description="精通" />
                                </Card>
                            </Col>
                            <Col span={5}>
                                <Card
                                    hoverable
                                    cover={<img alt="example"  src='https://cn.vuejs.org/images/logo.png' />}
                                >
                                    <Meta title="Vue" description="精通" />
                                </Card>
                            </Col>
                            <Col span={5}>
                                <Card
                                    hoverable
                                    cover={<img alt="example"  src='https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/img/header_logo.svg' />}
                                >
                                    <Meta title="React Native" description="熟悉" />
                                </Card>
                            </Col>
                            <Col span={5}>
                                <Card
                                    hoverable
                                    cover={<img alt="example"  src="assets/img/小程序-logo.jpg" />}
                                >
                                    <Meta title="小程序" description="精通" />
                                </Card>
                            </Col>
                        </Row>

                        <Row  justify="space-around" style={{marginTop:'20px'}}>
                            <Col span={5}>
                                <Card
                                    hoverable
                                    cover={<img alt="example"  src='http://static.nodejs.cn/_static/img/logo.svg' />}
                                >
                                    <Meta title="NodeJS" description="熟悉" />
                                </Card>
                            </Col>
                            <Col span={5}>
                                <Card
                                    hoverable
                                    cover={<img alt="example"  src='assets/img/mysql-logo.png' />}
                                >
                                    <Meta title="MySql" description="精通" />
                                </Card>
                            </Col>
                            <Col span={5}>

                            </Col>
                            <Col span={5}>

                            </Col>
                        </Row>
                    </div>
                    <div className='item contact'>
                        <div className='title'>
                            <h3>联系方式</h3>
                            <div className='cont'>
                                <img src='assets/img/wchat.png' />
                                <div className='text'>
                                    <p><span><MessageOutlined />微信：</span><span className='WeChat'>15773281560</span></p>
                                    <p><span><GithubOutlined />github：</span><a href='https://github.com/putao88' target="_blank" className='WeChat'>https://github.com/putao88</a></p>
                                    <p><span><MailOutlined />邮箱：</span><a href='mailto:15773281560@163.com' className='WeChat'>15773281560@163.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title'>
                            <h3>关于本站</h3>
                            <div className='cont'>
                                <div className='text' style={{marginLeft:'20px'}}>
                                    <p>博客主要用于分享技术知识，生活感悟以及读书心得...</p>
                                    <p>前端：<span className='tag'>React + Ant Design</span></p>
                                    <p>后端：<span className='tag'>Express + MYSQL</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
