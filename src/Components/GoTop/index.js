/*
 * @Author: Litao 
 * @Date: 2020-05-13 10:12:36 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-05-13 11:20:40
 * @descript 一键返回起点    requestAnimationFrame   cancelAnimationFrame
 */

import React from 'react'

import './index.css'

export default class GoTop extends React.Component {
    constructor(props) {
        super(props)
    }

    goTop() {
        let height = document.documentElement.scrollTop || document.body.scrollTop;
        let width = document.documentElement.scrollLeft || document.body.scrollLeft;
        function auto() {
            height <= 0 ? height = 0 : height = height - 50
            width <= 0 ? width = 0 : width = height - 50
            console.log(width, height)
            window.scrollTo(width, height);
            if (width > 0 || height > 0) {
                window.requestAnimationFrame(auto)
            }
        }
        auto()
    }

    render() {
        return (
            <div className="goTop">
                <img src={require('../../Image/gotop.jpeg')} onClick={() => { this.goTop() }} />
            </div>
        )
    }
}
