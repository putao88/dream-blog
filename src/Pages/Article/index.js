/*
 * @Author: houxiaoling 
 * @Date: 2020-08-06 15:25:58 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-09-18 18:09:16
 * 文章
 */

import React, { Component } from 'react'
import Markdown from 'react-markdown';
import { Menu, Input } from 'antd';
import { api } from '../../models/api'
import './index.css'

const { SubMenu } = Menu;
const { Search } = Input;

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown:'',
            articleType:[],
        }
    }


    componentWillMount() {
        this.getArticleByType()
    }

    /* 根据类型搜索文章 */
    getArticleByType = () => {
        const { articleType } = this.state
        api.getArticleByType({info:JSON.stringify( { type:articleType} )}, res => {
            if (res.code === 200) {
                this.setState({
                    markdown: res.data[0].content,
                })
            }
        })
    }
    // getArticleByType = () => {
    //     api.queryArticleClassify({},res => {
    //       const articleType = this.fixIntoTree(res.data,0);
    //       this.setState({
    //         articleType
    //       })
    //     });
    // }

    //整合数据成树形结构需要的
    fixIntoTree = (data,father_id) => {
        var tree = [];
        var temp;
        for (var i = 0; i < data.length; i++) {
            if (data[i].father_id == father_id) {
                var obj = {
                    value:data[i].id,
                    label:data[i].name,
                };
                temp = this.fixIntoTree(data, data[i].id);
                if (temp.length > 0) {
                    obj.children = temp;
                }
                tree.push(obj);
            }
        }
        return tree;
    }

    render () {
        const { markdown, articleType } = this.state
        const contentHeight = document.body.offsetHeight - 41
        return (
            <div className='article-content' style={{height:contentHeight}}>
                <div className='slider'>
                    <div style={{ padding:'15px', width:'250px', borderRight:'1px solid #f0f0f0' }}>
                        <Search
                            placeholder="输入你想找的文章"
                            onSearch={value => console.log(value)}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <Menu
                        onClick={this.handleClick}
                        style={{ width: 250, height:'calc(100% - 64px)' }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        {/* {
                            articleType.map(item => {
                                return <SubMenu key={item.id} title={item.label}>
                                    {
                                        item.children.map(child => {
                                            return <Menu.Item key={child.id}>{child.name}</Menu.Item>
                                        })
                                    }
                                </SubMenu>
                            })
                        } */}
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
                <div className='content-main'>
                    <div className='content-wrap'>
                        <Markdown className='markdown-body' source={markdown} />
                    </div>
                </div>
            </div>
        )
    }
}
