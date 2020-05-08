/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 11:15:57 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-05-08 16:27:53
 * @Description: 文章组件
 */

import React , { Component } from 'react';
import ReactDOM from 'react-dom'
import Banner from '../banner/index'
import './index.css'

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div>
                <Banner />
                <div className='content'>
                    <div className='cont w1000'>
                        <h1>文章组件</h1>
                    </div>
                </div>
            </div>
        )
    }

}