/*
 * @Author: houxiaoling 
 * @Date: 2020-08-06 15:25:58 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2021-01-22 17:37:16
 * 文章
 */

import React, { Component } from 'react'
import { Menu, Input, Empty, Badge  } from 'antd';

import { api } from '../../models/api'
import { fixIntoTree } from '../../models/utils'
import './index.css'
import ArticleDetail from '../../Components/ArticleDetail'
import Dashboard from '../../Components/Dashboard'

const { SubMenu } = Menu;
const { Search } = Input;

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: '',
			articleType: [],
			article:{},//当前选中文章
			leacotsList:[],//留言列表
        }
    }


    componentWillMount() {
        this.getArticleByType()
    }

    getArticleByType = () => {
        api.queryArticleClassify({}, res => {
            if (res.data) {
				const articleType = fixIntoTree(res.data, 0, 'title', 'id', 'children', true);
                this.setState({
                    articleType
                })
            }
        });
    }

    // 侧边栏树形结构渲染
    renderTree = (data) => {
        return (
            data.map(item => {
                if (item.children) {
                    return <SubMenu key={item.id} title={item.title}>
                        {
                            this.renderTree(item.children)
                        }
                    </SubMenu>
                } else {
                    return <Menu.Item key={item.id}>{item.title}</Menu.Item>
                }
            })
        )
    }

    handleClick = (e) => {
        api.getArticleById({ info: JSON.stringify({ id: e.key }) }, res => {
            const content = res.data.length ? res.data[0].content : ''
            if (res.data.length) {
                this.setState({
					markdown: content,
					article:res.data[0],
                })
            }

        });
    }

    render() {
        const { markdown, articleType, article, leacotsList } = this.state
        const contentHeight = document.body.offsetHeight - 41
        return (
            <div className='article-content' style={{ height: contentHeight }}>
                <div className='slider'>
                    <div style={{ padding: '15px', width: '250px', borderRight: '1px solid #f0f0f0' }}>
                        <Search
                            placeholder="输入你想找的文章"
                            onSearch={value => console.log(value)}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <Menu
                        onClick={this.handleClick}
                        style={{ width: 250, height: 'calc(100% - 64px)' }}
                        mode="inline"
                    >
                        {
                            this.renderTree(articleType)
                        }
                    </Menu>
                </div>
                <div className='content-main'>
					{
						JSON.stringify(article) != "{}" ? 
						<ArticleDetail markdown={markdown} leacotsList={leacotsList} article={article}/>
						: <Dashboard />
					}

                </div>
            </div>
        )
    }
}
