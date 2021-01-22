/*
 * @Author: houxiaoling 
 * @Date: 2021-01-22 17:13:47 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2021-01-22 18:06:27
 * 文章详情组件
 */
import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty, Input, Button, Badge  } from 'antd';
import { HeartOutlined, FundViewOutlined, MessageOutlined, } from '@ant-design/icons';
import Markdown from 'react-markdown';

import CommentEditor from '../CommentEditor'
import Comments from '../Comments'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import './index.css'
import { SELECTION_INVERT } from 'antd/lib/table/hooks/useSelection';

const { TextArea } = Input;

export default class ArticleDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
			leacotsList : props.leacotsList||[],
			article: props.article||{},
			markdown: props.markdown||'',
        }
	}
	
	componentDidUpdate(props) {
		console.log(props)
		// this.setState({
		// 	leacotsList : props.leacotsList,
		// 	article: props.article,
		// 	markdown: props.markdown,
		// })
	}

	render() {
		const { article,leacotsList, markdown } = this.state
		return (					
		<div className="article-detail-wrap">
			{/* 点赞，留言，转发分享 */}
			<div className="article-action-wrap">
				<div className="action-item">
					<Badge count={article.read_count} size="small" showZero style={{ backgroundColor: '#b2bac2' }} offset={[13,-13]}>
						<FundViewOutlined />
					</Badge>
				</div>
				<div  className="action-item">
					<Badge count={article.like_count} size="small" showZero style={{ backgroundColor: '#b2bac2' }} offset={[13,-13]}>
						<HeartOutlined />
					</Badge>
				</div>
				<div className="action-item">
					<Badge count={article.comment_count} size="small" showZero style={{ backgroundColor: '#b2bac2' }} offset={[13,-13]}>
						<MessageOutlined />
					</Badge>
					</div>
			</div>
			<div className='detail-wrap'>
				<Markdown className='markdown-body' source={markdown} />
				{/* 留言部分 */}
				<div className='review-version'>
					<div className='form'>
						<CommentEditor
							leacots={null}
							parentId={article.id} 
							dataSource={leacotsList} 
							changeDataSource={this.changeData}
							addWhisperConut={this.addWhisperConut}
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
											addWhisperConut={this.addWhisperConut}
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
		</div>)
	}
}
