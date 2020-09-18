/*
 * @Author: HouXiaoLing 
 * @Date: 2020-05-11 17:24:01 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-09-03 11:18:25
 */
import React, { Component } from 'react';
import { Route, Redirect, Switch  } from 'react-router-dom'
import { BackTop } from 'antd';
import './index.css'
import Header from './Header'
import Footer from './Footer'
import User from '../User'
import Home from '../Home'
import Article from '../Article'
import Whisper from '../Whisper'
import Leacots from '../Leacots'
import About from '../About'






export default class Layout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{marginTop:'80px'}}>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/home" exact component={Home}></Route>
                        <Route path="/user" exact component={User}></Route>
                        <Route path="/article" exact component={Article}></Route>
                        <Route path="/whisper" exact component={Whisper}></Route>
                        <Route path="/leacots" exact component={Leacots}></Route>
                        <Route path="/about" exact component={About}></Route>
                    </Switch>
                </div>
                <Footer />
                <BackTop />
            </div>
        )
    }
}