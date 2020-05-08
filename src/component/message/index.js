/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 16:00:43 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-05-08 16:28:11
 * @Description: 留言板组件
 */


import React , { Component } from 'react';

import './index.css'


export default class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div className='content'>
                <div className='cont w1000'>
                    <h1>留言板组件</h1>
                </div>
            </div>
        )
    }

}