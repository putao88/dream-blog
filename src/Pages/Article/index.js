/*
 * @Author: houxiaoling 
 * @Date: 2020-08-06 15:25:58 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-07 09:58:32
 * 文章
 */

import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty  } from 'antd';
import { api } from '../../models/api'
import './index.css'

const { TabPane } = Tabs;

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleList:[],
            articleType:'前端文章',
            currentPage:1,
            pageSize:5,
            total:0,
        }
    }

    componentDidMount() {
        this.getArticleByType()
    }

    /* 根据类型搜索文章 */
    getArticleByType = () => {
        const { articleType } = this.state
        api.getArticleByType({info:JSON.stringify( { type:articleType} )}, res => {
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
            articleType: type,
            currentPage: 1,
        }, () => {
            this.getArticleByType()
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
                <div className='content'>
                    <div className='cont w1000'>
                        <div className='title'>
                        <Tabs defaultActiveKey="前端文章" onChange={this.tabChange}>
                            <TabPane tab="前端文章" key="前端文章" />
                            <TabPane tab="心情随笔" key="心情随笔" />
                            <TabPane tab="其他文章" key="其他文章" />
                        </Tabs>
                        </div>
                        <div className='list-item'>
                            {
                                articles.length ?
                                    articles.map( article => {
                                        return (
                                            <div className='item' key={article.id}>
                                                <Row gutter={20}>
                                                    <Col span={10}>
                                                        <div className='img'>
                                                                <img src='assets/img/sy_img1.jpg' />
                                                        </div>
                                                    </Col>
                                                    <Col span={14}>
                                                        <div className='item-cont'>
                                                            <h3>
                                                                {article.title}
                                                                <button className='layui-btn layui-btn-danger new-icon'>new</button>
                                                            </h3>
                                                            <h5>{article.type}</h5>
                                                            <p>{article.content}</p>
                                                            <a href='#' className='go-icon' style={{background:'url("assets/img/jiantou.png") center center no-repeat'}}></a>
                                                        </div>
                                                    </Col>
                                                </Row>
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
