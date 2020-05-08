/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 11:15:57 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-05-08 14:52:20
 * @Description: 头部组件
 */

import React , { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div className='header'>
                <h1 className='logo'>
                    <a>
                        <span>MYBLOG</span>
                        <img src='../../../assets/img/logo.png' />
                    </a>
                </h1>
                <div className='nav'>
                    <a>文章</a>
                    <a>留言</a>
                    <a>相册</a>
                    <a>关于</a>
                </div>
                <p className='welcome-text'>欢迎来到Dreamer博客~</p>
            </div>
        )
    }

}