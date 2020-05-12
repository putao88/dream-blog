/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:28:04 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-05-12 14:22:51
 * @descript  goArticle点击回调
 */

import React, { Component } from 'react';

import Label from '../Label/index'

import './index.css'
import { skyblue } from 'color-name';

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    
    render() {
        const { goArticle, id=1 } = this.props
        return (
            <div className="blog-acticle">
                <div className="acticle-top">
                    <div onClick={() => {goArticle(id)}}>
                        <img src="https://www.arcinbj.com/upload/2020/2/%E4%B8%BB%E9%A1%B52-a3c9bab88f9c41efbc40c948ee8b45d6.jpeg" />
                    </div>
                    <div className="fontFamily">
                        <h2 onClick={() => {goArticle(id)}}>诗和远方</h2>
                        <p>
                        人生，终如白驹过隙，总是只有在经历过后才会懂得，驻足停望的瞬间，于苍茫的心之阡陌上站成了一树寂静，浅尝那些所谓的岁月流连，道尽心事，诉尽衷肠。时光不会重来，如果有，那也只是你所谓的选择，我们终不能填补所有的空缺和遗憾，但终希望能有一个属于自己的归属，在幽幽远方，有一诗伴你随行
                        </p>
                    </div>
                </div>
                {/* <p className="time"><p></p><span>{'2020-5-12'}</span><p></p></p> */}
                <div className="acticle-bottom">
                    <div className="acticleBtnLeft">
                        <p>
                            <i className="iconfont icon-biaoqian"></i>
                            {/* 循环 */}
                            <Label
                                txt={'Javascript'}
                            />
                            <Label
                                color={'skyblue'}
                                borderColor={'green'}
                                backgroundColor={'pink'}
                                txt={'CSS'}
                            ></Label>
                            <Label
                                txt={'HTML'}
                            ></Label>
                        </p>
                    </div>
                    <div className="acticleBtnRight">
                        <p><i className="iconfont icon-shijian"></i><span>{'2020-5-12'}</span></p>
                        <p><i className="iconfont icon-fangwen"></i><span>{1123}</span></p>
                        <p><i className="iconfont icon-zuozhe"></i><span>{'Litao'}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}