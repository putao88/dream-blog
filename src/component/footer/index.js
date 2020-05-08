/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 11:15:57 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-05-08 14:54:38
 * @Description: 底部组件
 */

import React , { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div className='footer-wrap'>
                <div className='footer w1000'>
                    <div className='qrcode'>
                        <img src='../../../assets/img/erweima.jpg' />
                    </div>
                    <div className='practice-mode'>
                        <img src='../../../assets/img/down_img.jpg' />
                        <div className='text'>
                            <h4 className="title">我的联系方式</h4>
                            <p>微信<span className="WeChat">1234567890</span></p>
                            <p>手机<span className="iphone">1234567890</span></p>
                            <p>邮箱<span className="email">1234567890@qq.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}