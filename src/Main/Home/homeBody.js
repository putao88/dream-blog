/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:23:52 
 * @Last Modified by:   Litao 
 * @Last Modified time: 2020-05-11 17:23:52 
 */

import React from 'react'

import './index.css'

class HomeBody extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>

                <div className="headerImg">
                    <img src="https://www.arcinbj.com/upload/2020/2/%E4%B8%BB%E9%A1%B52-a3c9bab88f9c41efbc40c948ee8b45d6.jpeg"></img>
                </div>
                <div className="containerBac">
                    <div className="container ">
                        <div className="item item-1">1</div>
                        <div className="item item-2">2</div>
                        <div className="item item-3">3</div>
                        <div className="item item-4">4</div>
                        <div className="item item-5">5</div>
                        <div className="item item-6">6</div>
                        <div className="item item-7">7</div>
                        <div className="item item-8">8</div>
                        <div className="item item-9">9</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeBody