/*
 * @Author: houxiaoling 
 * @Date: 2020-07-31 17:03:24 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2021-01-22 15:42:21
 */
import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty  } from 'antd';
import { HeartOutlined, FundViewOutlined, MessageOutlined, } from '@ant-design/icons';
import { api } from '../../models/api'
import './index.css'

const { TabPane } = Tabs;

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
			screenHeight:document.body.offsetHeight,
            articleList:[],
            filter:'hot',
            currentPage:1,
            pageSize:5,
            total:0,
        }
    }

    componentDidMount() {
        this.getArticleByFilter()
    }

    /* 根据条件搜索文章 */
    getArticleByFilter = () => {
        const { filter } = this.state
        api.getArticleByFilter({info:JSON.stringify( { filter:filter} )}, res => {
            if (res.code === 200) {
                this.setState({
                    articleList: res.data,
                    total: res.data.length,
                })
            }
        })
    }

    /* 文章类型切换 */
    tabChange = (type) => {
        this.setState({
            filter: type,
            currentPage: 1,
        }, () => {
            this.getArticleByFilter()
        })
    }

    paginationChange = ( page,pageSize ) => {
        this.setState({
            currentPage: page
        })
    }

    render () {
        const { articleList, currentPage, pageSize, total } = this.state
        //文章分页后的内容
        const articles = articleList.slice((currentPage-1)*pageSize,(currentPage-1)*pageSize+pageSize)
        return (
            <div>
                <div className='banner' style={{height:'500px',background:'url("assets/img/banner.jpg") no-repeat',backgroundSize:'100% 100%'}}>
                    <div className='cont w1000'>
                        <div className='title'>
                            <h3>MY<br/>BLOG</h3>
                            <h4>well-balanced heart</h4>
                        </div>
                        <div className='amount'>
                            <p>
                                <span className='text'>访问量</span>
                                <span className='access'>1000</span>
                            </p>
                            <p>
                                <span className='text'>日志</span>
                                <span className='daily-record'>1000</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <div className='cont w1000' style={{minHeight:'380px'}}>
                        <div className='title'>
                        <Tabs defaultActiveKey="hot" onChange={this.tabChange}>
                            <TabPane tab="热门文章" key="hot" />
                            <TabPane tab="最近文章" key="latest" />
                        </Tabs>
                        </div>
                        <div className='list-item'>
                            {
                                articles.length ?
                                    articles.map( article => {
                                        return (
                                            <div className='item' key={article.id}>
												{/* 图片 */}
												<div className='img-wrap'>
													<img src='assets/img/sy_img1.jpg' />
												</div>
												{/* 内容 */}
												<div className='item-cont'>
													<div className='item-title'>
														<span style={{fontSize:'24px'}}>{article.title}</span>
														{/* <button className='layui-btn layui-btn-danger new-icon'>new</button> */}
														<div className='item-title-time'>{article.time}</div>
													</div>
													<div className='item-content'>{article.content}</div>
													<div className='op-list'>
														<span className='read'>
															<FundViewOutlined />
															<span>{article.read_count}</span>
														</span>
														<span className='like'>
															{/* <LikeOutlined /> */}
															<HeartOutlined />
															<span>{article.like_count}</span>
														</span>
														<span className='edit'>
															<MessageOutlined />
															<span>{article.comment_count}</span>
														</span>
														<a href='#' className='go-icon' style={{background:'url("assets/img/jiantou.png") center center no-repeat',}}></a>
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
            </div>
        )
    }
}
