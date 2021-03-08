/*
 * @Author: houxiaoling 
 * @Date: 2020-09-25 17:56:13 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2021-01-26 15:38:21
 * 留言组件 
 */

import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty, Input, Button  } from 'antd';
import { LikeOutlined, MessageOutlined } from '@ant-design/icons'
import { api } from '../../models/api'
import './index.css'
import CommentEditor from '../CommentEditor'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

const { TextArea } = Input;


export default class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
			leacots : props.leacots,
			type:props.type,
			rowItem:props.rowItem,
        }
    }

	//点赞
	addLikeCount = (id) => {

	}
    //展示回复框
    showReply = (id) => {
        const allCommentData = this.props.dataSource
        for (let i= 0; i<allCommentData.length; i++) {
            if (allCommentData[i].id === id) {
                allCommentData[i].replyShow = !allCommentData[i].replyShow
                i = allCommentData.length
            } else {
                if (allCommentData[i].comment_replys) {
                    const childComments = allCommentData[i].comment_replys
                    for (let j=0 ; j<childComments.length; j++) {
                        if (childComments[j].id === id) {
                            childComments[j].replyShow = !childComments[j].replyShow
                            allCommentData[i].comment_replys = childComments
                            j = childComments.length
                            i = allCommentData.length
                        }
                    }
                }
            }
        } 
        this.props.changeData(allCommentData)
    }

    //回复框改变源数据
    changeDataSource = (data) => {
        this.props.changeData(data)
    }

    render() {
        const { leacots, type, rowItem } = this.state
        const controls = []
        return (<div className='cont-wrap'>
             <div className='cont' key={leacots.id}>
                 <div className='img'>
                     <img className='avatar' src='assets/img/header.png' />
                 </div>

                 <div className='text'>

					{/* 名称 */}
                     <div className='tit'>
                         <span className='name'>{leacots.name}</span>
                     </div>
					 
					{/* 回复内容 */}
                     <div className='ct'>
                         <BraftEditor 
                            controls={controls}
                            readOnly
                            defaultValue={BraftEditor.createEditorState(leacots.content)} />
                     </div>

					{/* 操作行 */}
                     <div className='action-wrap'>
                        <div className='data'>{leacots.time}</div>
                        <div className='action-box'>
                            <span><LikeOutlined /> {leacots.like}</span>
                            <span onClick={() => this.showReply(leacots.id)}><MessageOutlined />  回复</span>
                        </div>
                     </div>

					 {/* 回复框 */}
                     {
                        leacots.replyShow ?
                        <div className='text-child' style={{marginBottom:'10px'}}>
                            <CommentEditor 
                                leacots={leacots} 
                                dataSource={this.props.dataSource} 
                                parentId={leacots.id}
								changeDataSource={this.changeDataSource}
								addWhisperConut={this.props.addWhisperConut}
								addArticleCount={this.props.addArticleCount}
								type={type}
								rowItem={rowItem}
                            />
                        </div>
                        : null
                    }
					{/* 回复子内容 */}
                     {
                         leacots.comment_replys && leacots.comment_replys.length ?
                         leacots.comment_replys.map(item => {
                            return <div className='cont' key={item.id}>

                                    <div className='img'>
                                        <img className='avatar' src='assets/img/header.png' />
                                    </div>

                                    <div className='text'>
                                        <div className='tit'>
                                            <span className='name'>{item.name}</span>
                                        </div>

                                        <div className='ct'>
											<div className='ct-wrap'>
												{
													item.level == 3 ?
														<div>回复<span style={{color:'#406599'}}>{item.replyer}</span>：</div>
													: null
												}
												<div>
													<BraftEditor 
														controls={controls}
														readOnly
														defaultValue={BraftEditor.createEditorState(item.content)} />
												</div>
											</div>
                                        </div>

                                        <div className='action-wrap'>
                                            <div className='data'>{item.time}</div>
                                            <div className='action-box'>
                                                <span onClick={()=> this.addLikeCount(item.id)}><LikeOutlined /> {item.like}</span>
                                                <span onClick={()=> this.showReply(item.id)}><MessageOutlined />  回复</span>
                                            </div>
                                        </div>
                                        { item.replyShow ? 
                                            <CommentEditor 
                                                leacots={item} 
												dataSource={this.props.dataSource}
												parentId={leacots.id} 
												changeDataSource={this.changeDataSource}
												addWhisperConut={this.props.addWhisperConut}
												type={type}
												rowItem={rowItem}
                                            /> : null }
                                    </div>
                                </div>
                         })
                        :
                        null
                    }
                 </div>
             </div>
        </div>)
    }
}
