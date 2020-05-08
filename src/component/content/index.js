/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 15:30:46 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-05-08 16:07:23
 * @Description: 中间内容组件
 */


import React , { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

import './index.css'
import Article from '../article/index'
import Photo from '../photo/index'
import About from '../about/index'
import Message from '../message/index'





export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Article} />
                    <Route exact path="/article/*" component={Article} />
                    <Route exact path="/message/*" component={Message} />
                    <Route exact path="/photo/*" component={Photo} />
                    <Route exact path="/about/*" component={About} />
                </Router>
            </div>
        )
    }

}