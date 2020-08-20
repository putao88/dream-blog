/*
 * @Author: houxiaoling 
 * @Date: 2020-08-20 16:21:28 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-20 18:01:51
 * 工具 
 */


import React, { Component } from 'react'
import { Menu } from 'antd';
import { api } from '../../models/api'
import './index.css'

const { SubMenu } = Menu;

export default class Tool extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
    }

    handleClick = e => {
        console.log('click ', e);
    };

    render () {
        const contentHeight = document.body.offsetHeight - 41
        return (
            <div className='tool-content' style={{height:contentHeight}}>
                <div className='slider'>
                    <Menu
                        onClick={this.handleClick}
                        style={{ width: 220, height:'100%' }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title='前端'>
                            <Menu.Item key="1">JavaScript</Menu.Item>
                            <Menu.Item key="2">NodeJs</Menu.Item>
                            <Menu.Item key="3">React Native</Menu.Item>
                            <Menu.Item key="4">Flutter</Menu.Item>
                            <Menu.Item key="5">PWA</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="后台">
                            <Menu.Item key="5">Java</Menu.Item>
                            <Menu.Item key="6">MySql</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title="技术网站">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title="软件推荐">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title="学习资源">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}
