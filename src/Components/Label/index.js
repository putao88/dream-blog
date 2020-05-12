/*
 * @Author: Litao 
 * @Date: 2020-05-12 11:39:24 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-05-12 14:58:54
 * @descript  className:是否拥有hover,skew,rotate状态(默认无) color: 文字颜色 borderColor: 边框颜色 backgroundColor: 背景颜色  颜色默认黑色
 */

import React from 'react'

import './index.css'
import { black } from 'color-name'

export default class Label extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultColo: 'black',
            text: 'Nothing'
        }
    }

    render() {
        const { color, borderColor, backgroundColor, txt, status } = this.props
        const { defaultColor, text } = this.state
        let className
        switch (status) {
            case 'hover':
                className = 'labelHover'
                break;
            case 'rotate':
                className = 'labelRotate'
                break;
            case 'skew':
                className = 'labelSkew'
                break;
            default:
                className = 'labelSpan'
                break;
        }
        return (
            <React.Fragment>
                <span
                    className={ className }
                    style={{ color: color || defaultColor, borderColor: borderColor || defaultColor, backgroundColor: backgroundColor || defaultColor }}
                >
                    {txt || text}
                </span>
            </React.Fragment>
        )
    }
}