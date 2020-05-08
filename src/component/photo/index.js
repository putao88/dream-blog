/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 16:01:02 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-05-08 16:30:39
 * @Description: 相册组件 
 */


import React , { Component } from 'react';
import './index.css'


export default class Photo extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div className='content'>
                <div className='cont w1000'>
                    <h1>相册组件</h1>
                </div>
            </div>
        )
    }

}