/*
 * @Author: houxiaoling 
 * @Date: 2020-09-25 17:56:13 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-10-12 15:27:14
 * 留言组件 
 */

import React, { Component } from 'react'
import { Tabs, Row, Col, Pagination, Empty, Input, Button  } from 'antd';
import { LikeOutlined, MessageOutlined } from '@ant-design/icons'
import { api } from '../../models/api'
import './index.css'
const { TextArea } = Input;


export default class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leacots : props.leacots
        }
    }
    render() {
        const { leacots } = this.state
        return (<div className='cont-wrap'>
             <div className='cont' key={leacots.id}>
                 <div className='img'>
                     <img className='avatar' src='assets/img/header.png' />
                 </div>
                 <div className='text'>
                     <div className='tit'>
                         <span className='name'>{leacots.name}</span>
                     </div>
                     <div className='ct'>
                         {leacots.content}
                     </div>
                     <div className='action-wrap'>
                        <div className='data'>{leacots.time}</div>
                        <div className='action-box'>
                            <span><LikeOutlined /> 12</span>
                            <span><MessageOutlined />  回复</span>
                        </div>
                     </div>
                     {
                        //  leacots.children ?
                        1 ?
                            <div className='text-child'>
                                <div className='cont' key={leacots.id}>
                                    <div className='img'>
                                        <img className='avatar' src='assets/img/header.png' />
                                    </div>
                                    <div className='text'>
                                        <div className='tit'>
                                            <span className='name'>{leacots.name}</span>
                                        </div>
                                        <div className='ct'>
                                            {leacots.content}
                                        </div>
                                        <div className='action-wrap'>
                                            <div className='data'>{leacots.time}</div>
                                            <div className='action-box'>
                                                <span><LikeOutlined /> 12</span>
                                                <span><MessageOutlined />  回复</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            null
                     }
                 </div>
             </div>
        </div>)
    }
}
