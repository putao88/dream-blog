/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 11:15:57 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-05-08 14:52:43
 * @Description: 轮播展示组件
 */

import React , { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css'

export default class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        const bannerStyle = {
            background: "url('./../../../assets/img/banner.jpg') no-repeat"
        }
        return (
            <div className='banner' style={bannerStyle}>
                <div className="cont w1000">
                    <div className='title'>
                        <h3>MY<br />BLOG</h3>
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
        )
    }

}