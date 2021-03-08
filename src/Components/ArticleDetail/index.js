/*
 * @Author: houxiaoling 
 * @Date: 2021-01-22 17:13:47 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2021-01-26 14:48:50
 * 文章详情组件
 */
import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty, Input, Button, Badge  } from 'antd';
import { HeartOutlined, FundViewOutlined, MessageOutlined, ArrowUpOutlined } from '@ant-design/icons';
import Markdown from 'react-markdown';
import CommentEditor from '../CommentEditor'
import Comments from '../Comments'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import './index.css'
import { api } from '../../models/api'

export default class ArticleDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
			leacotsList : props.leacotsList||[],
			article: props.article||{},
			markdown: props.markdown||'',
        }
	}
	
	componentWillReceiveProps(nextProps, nextState) {
		this.setState({
			leacotsList : nextProps.leacotsList,
			article: nextProps.article,
			markdown: nextProps.markdown,
		})
	}
	
	// 跳转至评论区
	toAnchor = (id) => {
		document.querySelector(id).scrollIntoView(true)
	}
	
	//修改源数据
	changeData = (data) => {
		this.setState({
            leacotsList:data
        })
	}

	// 改变文章的留言数量
	addArticleCount = (id) =>{
		const { article } = this.state
		article.comment_count = article.comment_count + 1
		this.setState({
			article,
        })
	}

	// 更新文章
	updateArticle= () => {
		let param = JSON.parse(JSON.stringify(this.state.article))
		param.like_count = param.like_count + 1
		api.updateArticle({info:JSON.stringify(param)}, res => {
			this.setState({
				article:param,
			})
		})
	}

	render() {
		const { article,leacotsList, markdown } = this.state
		return (					
		<div style={{height:'100%', width:'100%', position:'relative'}}>
			{/* 点赞，留言，转发分享 */}
			<div className="article-action-wrap">
				<div className="action-item">
					<Badge count={article.read_count} size="small" showZero style={{ backgroundColor: '#b2bac2' }} offset={[13,-13]}>
						<FundViewOutlined />
					</Badge>
				</div>
				<div  className="action-item" onClick={this.updateArticle}>
					<Badge count={article.like_count} size="small" showZero style={{ backgroundColor: '#b2bac2' }} offset={[13,-13]}>
						<HeartOutlined />
					</Badge>
				</div>
				<div className="action-item" onClick={() => this.toAnchor('#article-leacots')}>
					<Badge count={article.comment_count} size="small" showZero style={{ backgroundColor: '#b2bac2' }} offset={[13,-13]}>
						<MessageOutlined />
					</Badge>
					</div>
			</div>
			<div className='backToTop' onClick={() => this.toAnchor('#article-top')}>
				<ArrowUpOutlined />
			</div>
			<div className="article-detail-wrap">
				<div className='detail-wrap'>
					<div id='article-top'></div>
					<Markdown className='markdown-body' source={markdown} />
					{/* 留言部分 */}
					<div className='review-version' id='article-leacots'>
						<div className='form'>
							<CommentEditor
								leacots={null}
								parentId={article.id} 
								dataSource={leacotsList} 
								changeDataSource={this.changeData}
								addArticleCount={this.addArticleCount}
								type="article"
								rowItem={article}
							/>
						</div>
						<div className='list-cont'>
							{
								leacotsList.length ?
									leacotsList.map(leacots => {
										return (
											<Comments 
												key={leacots.id} 
												leacots={leacots} 
												dataSource={leacotsList} 
												changeData = {this.changeData}
												addArticleCount={this.addArticleCount}
												type="article"
												rowItem={article}
											/>
										)
									})
									:
									<Empty />
							}
						</div>
					</div>
				</div>
			</div>
			
		</div>)
	}
}
