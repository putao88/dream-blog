/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 11:15:57 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-05-08 16:17:36
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
            <div>
                <h1>文章组件</h1>
            </div>
        )
    }

}