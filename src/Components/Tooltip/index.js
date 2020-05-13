/*
 * @Author: Litao 
 * @Date: 2020-05-13 16:05:56 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-05-13 17:57:36
 * @descript 文字提示
 */

 import React from 'react'

 import './index.css'

 export default class Tooptip extends React.Component {
    constructor(props) {
        super(props)

    }

    shouldComponentUpdate(a,b) {
        console.log(a,b)
        return false
    }

    render() {
        const { type, txt } = this.props
        console.log(this.props.children)
        let div
        switch (type) {
            case 'toolTip-top':
        div =  (<div style={{display: 'inline-block'}}>{this.props.children}<div className="toolTip-top">{txt}</div></div>)
                break;
            case 'toolTip-right':
                div = <div className="toolTip-right">{txt}</div>
                break;
            case 'toolTip-left':
                div = <div className="toolTip-left">{txt}</div>
                break;
            default:
                div = <div className="toolTip-bottom">{txt}</div>
                break;
        }
        return (
            <React.Fragment>
                {div}
            </React.Fragment>
        )
    }
 }