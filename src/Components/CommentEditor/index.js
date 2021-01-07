/*
 * @Author: houxiaoling 
 * @Date: 2020-10-12 17:15:54 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2021-01-07 11:01:37
 * 留言组件 
 */
import React, { Component } from 'react'
import {  Row, Col, Input, Button, message  } from 'antd';
import BraftEditor from 'braft-editor'
import uuid from 'react-uuid'
import moment from 'moment';
import 'braft-editor/dist/index.css'
import { api } from '../../models/api'
import './index.css'

export default class CommentEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
			editorState: BraftEditor.createEditorState(null),
			type:props.type,
			rowItem:props.rowItem,
        }
    }

    handleChange = (editorState) => {
        this.setState({ editorState })
    }

    submit = () => {
        const { nickName, email, website, editorState } = this.state
        if (!nickName || !email || !editorState) {
            message.warning("请将信息填写完整！")
            return
        }
        //判断当前留言内容是在哪一个阶段
        let replyer = ''
        let level = 1
        if (this.props.leacots) {
            replyer = this.props.leacots.name
            //如果是直接评论或者留言，则评论level=1;
            //如果是对1级评论回复，这level=2
            //如果是对2级评论回复，这level=3
            //如果是对3级评论回复，这level=3
            switch(this.props.leacots.level) {
                case 1:
                    level = 2
                    break;
                case 2:
                    level = 3
                    break;
                case 3:
                    level = 3
                    break;
                default:
                    level = 1
                    break;
            }
        }
        const param = {
            id:uuid(),
            name: nickName,
            email: email,
            website: website,
            content: editorState.toHTML(),
            replyer: replyer,
            comment_replys:'',
            status: 0,
            father_id: this.props.parentId,
            level:level,
            time: moment().format('YYYY/MM/DD HH:mm:ss'),
		}
		const dataSource = this.props.dataSource || []
        if (level === 1) {
			// 新增一级留言
			dataSource.push(param)
            api.addLeacots({info:JSON.stringify(param)}, res => {
                if (res.code === 200) {
					this.props.changeDataSource(dataSource)
					if (this.state.type == 'whisper') {
						this.updateWhisper()
					}
					message.success("留言成功！")
					this.clearEditor()
                }
            })
        } else {
            //更新一级留言
            let data = {}
            dataSource.map(item => {
                if (item.id === this.props.parentId) {
                    if (item.comment_replys) {
                        item.comment_replys.push(param)
                    } else {
                        item.comment_replys = [param]
                    }
                    data = item
				}
				item.replyShow = false
				if (item.comment_replys && item.comment_replys.length) {
					item.comment_replys.map(child => {
						child.replyShow = false
					})
				}
            })
            // data.comment_replys = JSON.stringify(data.comment_replys)
            api.updateLeacots({info:JSON.stringify(data)}, res => {
                if (res.code === 200) {
                    //改变源数据
					this.props.changeDataSource(dataSource)
					if (this.state.type == 'whisper') {
						this.updateWhisper()
					}
					message.success("留言成功！")
					this.clearEditor()
                }
            })
		}

	}

	// 更新微语
	updateWhisper = () => {
		let param = JSON.parse(JSON.stringify(this.state.rowItem))
		param.comment_count = param.comment_count + 1
		api.updateWhisper({info:JSON.stringify(param)}, res => {
			this.props.addWhisperConut(this.state.rowItem.id)
		})
	}

	 clearEditor = () => {
		 this.setState({
			nickName:'',
			email:'',
			website:'',
			editorState: BraftEditor.createEditorState(null)
		 })
	 }

  
    render () {
        const { nickName, email, website } = this.state
        const controls = [
            'emoji'
          ]
      return (
          <div className='commentEditor'>
            <Row style={{borderBottom: '1px solid #f0f0f0'}}>
                <Col span={8}><Input placeholder="*昵称" value={nickName} onChange={ (e) => this.setState({nickName:e.target.value})} /></Col>
                <Col span={8}><Input placeholder="*电子邮件" value={email} onChange={ (e) => this.setState({email:e.target.value})} /></Col>
                <Col span={8}><Input placeholder="个人站点" value={website} onChange={ (e) => this.setState({website:e.target.value})} /></Col>
            </Row>
            <BraftEditor 
                controls={controls}
                value={this.state.editorState} 
                onChange={this.handleChange}
            />
            <div style={{textAlign:"right"}}>
                <Button type="primary" size='small' onClick={this.submit}>确定</Button>
            </div>
          </div>
      )
    }
  
  }
