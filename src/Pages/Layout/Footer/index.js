/*
 * @Author: houxiaoling 
 * @Date: 2020-08-03 17:31:44 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-11 16:43:40
 * 公共底部
 */

import React, { Component } from 'react';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
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
                        <img src='assets/img/wchat.png' />
                    </div>
                    <div className='practice-mode'>
                        <img src='assets/img/down_img.jpg' />
                        <div className='text'>
                            <h4 className='title'>我的联系方式</h4>
                            <p>微信<span className='WeChat'>15773281560</span></p>
                            <p>手机<span className='WeChat'>15773281560</span></p>
                            <p>邮箱<span className='WeChat'>15773281560@163.com</span></p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

