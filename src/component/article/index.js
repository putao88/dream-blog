/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 11:15:57 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-05-08 14:52:57
 * @Description: 文章组件
 */

import React , { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css'

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div className='content'>
                <div className='cont w1000'>
                    <div className='title'>
                        {/* <span class="layui-breadcrumb" lay-separator="|" style="visibility: visible;">
                            <a href="javascript:;" class="active">设计文章</a><span lay-separator="">|</span>
                            <a href="javascript:;">前端文章</a><span lay-separator="">|</span>
                            <a href="javascript:;">旅游杂记</a>
                        </span> */}
                    </div>
                </div>
            </div>
        )
    }

}