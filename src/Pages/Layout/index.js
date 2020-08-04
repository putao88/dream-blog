/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:24:01 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-04 15:15:35
 */
import React, { Component } from 'react';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom'
import './index.css'
import Header from './Header'
import Footer from './Footer'
import User from '../User'
import Article from '../Article'



export default class Layout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route path="/" exact component={Article}></Route>
                        <Route path="/user" exact component={User}></Route>
                        <Route path="/article" exact component={Article}></Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}