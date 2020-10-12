/*
 * @Author: houxiaoling 
 * @Date: 2020-10-12 17:15:54 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-10-12 17:58:21
 * 留言组件 
 */
import React, { Component } from 'react'
import {  Row, Col, Input, Button  } from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import './index.css'

export default class CommentEditor extends Component {

    state = {
      editorState: BraftEditor.createEditorState(null)
    }
  
    render () {
        const controls = [
            'emoji'
          ]
      return (
          <div className='commentEditor'>
            <Row>
                <Col span={8}><Input placeholder="*昵称" /></Col>
                <Col span={8}><Input placeholder="*电子邮件" /></Col>
                <Col span={8}><Input placeholder="个人站点" /></Col>
            </Row>
            <BraftEditor 
                controls={controls}
                value={this.state.editorState} onChange={this.handleChange}/>
            <div style={{textAlign:"right"}}>
                <Button type="primary" style={{marginTop:'20px',width:'100px',height:'40px'}}>确定</Button>
            </div>
          </div>
      )
    }
  
    handleChange = (editorState) => {
      this.setState({ editorState })
    }
  
  }
