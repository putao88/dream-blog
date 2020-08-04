/*
 * @Author: houxiaoling 
 * @Date: 2020-07-31 17:03:24 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-04 17:10:59
 */
import React, { Component } from 'react'
import { api } from '../../models/api'
import './index.css'

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userList:[]
        }
    }

    componentDidMount() {
    }

    render () {
        const { userList } = this.state
        return (
            <div>
                <div className='banner' style={{background:'url("assets/img/banner.jpg") no-repeat'}}>
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
                    <div className='cont w1000'>
                        <div className='title'>
                            <span className='layui-breadcrumb' style={{visibility:'visible'}}>
                                <a href="#" className="active">设计文章</a>
                                <span lay-separator="">|</span>
                                <a href="#">前端文章</a>
                                <span lay-separator="">|</span>
                                <a href="#">旅游杂记</a>
                            </span>
                        </div>
                        <div className='list-item'>
                            <div className='item'>
                                <div className='layui-fluid'>
                                    <div className='layui-row'>
                                        <div className='layui-col-xs12 layui-col-sm4 layui-col-md5'>
                                            <div className='img'>
                                                <img src='assets/img/sy_img1.jpg' />
                                            </div>
                                        </div>
                                        <div className='layui-col-xs12 layui-col-sm8 layui-col-md7'>
                                            <div className='item-cont'>
                                                <h3>
                                                    空间立体效果图，完美呈现最终效果
                                                    <button className='layui-btn layui-btn-danger new-icon'>new</button>
                                                </h3>
                                                <h5>设计文章</h5>
                                                <p>室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在</p>
                                                <a href='#' className='go-icon' style={{background:'url("assets/img/jiantou.png") center center no-repeat'}}></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 分页 */}
                        <div style={{textAlign:'center'}}>
                            <div className='layui-box layui-laypage layui-laypage-default'>
                                <a className='layui-laypage-prev'>上一页</a>
                                <a href='#'>1</a>
                                <a href='#'>2</a>
                                <a href='#'>3</a>
                                <a href='#'>4</a>
                                <a href='#'>5</a>
                                <a href='#' className='layui-laypage-spr'>...</a>
                                <a href='#'>7</a>
                                <a href='#' className='layui-laypage-next'>下一页</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
