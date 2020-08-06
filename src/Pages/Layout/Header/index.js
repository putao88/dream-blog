/*
 * @Author: houxiaoling 
 * @Date: 2020-08-03 17:06:45 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-06 17:46:45
 * @公共头部
 */

import React, { Component } from 'react';
import './index.css'
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url:'',
            navList: [
                { id:1, href:'#/home/', name:'首页', activeColor: false},
                { id:2, href:'#/article/', name:'文章', activeColor: false},
                { id:3, href:'#/whisper/', name:'微语', activeColor: false},
                { id:4, href:'#/leacots/', name:'留言', activeColor: false},
                { id:5, href:'#/about/', name:'关于', activeColor: false},

            ]
        }
    }


    render () {
        const { navList,url } = this.state
        return (
            <div className='header'>
                <h1 className='logo'>
                    <a href='#/'>
                        <img src='assets/img/logo.png' />
                    </a>
                </h1>
                <div className='nav'>
                    {
                        navList.map((nav,index) => {
                            return <a key={nav.id} onClick={this.changeUrl} href={nav.href} className={nav.activeColor ? 'active':''}>{nav.name}</a>
                        })
                    }
                </div>
                <p className='welcome-text'>欢迎来到葡萄的博客~</p>
            </div>
        )
    }
}
