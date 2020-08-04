/*
 * @Author: houxiaoling 
 * @Date: 2020-08-03 17:06:45 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-04 15:17:01
 * @公共头部
 */

import React, { Component } from 'react';
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
                    <a href='#/article/'>
                        <img src='assets/img/logo.png' />
                    </a>
                </h1>
                <div className='nav'>
                    <a href='#/article/'>文章</a>
                    <a href='#/whisper/'>微语</a>
                    <a href='#/leacots/'>留言</a>
                    <a href='#/album/'>相册</a>
                    <a href='#/about/'>关于</a>
                </div>
                <p className='welcome-text'>欢迎来到葡萄的博客~</p>
            </div>
        )
    }
}
