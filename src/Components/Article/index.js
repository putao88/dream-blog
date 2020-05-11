/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:28:04 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-05-11 18:21:45
 */

import React , { Component } from 'react';
import './index.css'

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div className="blog-acticle">
                <div className="acticle-top">
                    <div>
                        <img src="https://www.arcinbj.com/upload/2020/2/%E4%B8%BB%E9%A1%B52-a3c9bab88f9c41efbc40c948ee8b45d6.jpeg" />
                    </div>
                    <div>
                        <h2>111111</h2>
                        <span>
                        background-image 属性为元素设置背景图像。

元素的背景占据了元素的全部尺寸，包括内边距和边框，但不包括外边距。

默认地，背景图像位于元素的左上角，并在水平和垂直方向上重复。

提示：请设置一种可用的背景颜色，这样的话，假如背景图像不可用，页面也可获得良好的视觉效果。
                        </span>
                    </div>
                </div>
                <div className="acticle-bottom">
                    3
                </div>
            </div>
        )
    }
}