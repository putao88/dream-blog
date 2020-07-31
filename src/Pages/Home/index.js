/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:24:01 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-31 11:27:46
 */
import React from 'react'

import HomeHeader from './homeHeader'
import HomeBody from './homeBody'
import './index.css'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <HomeHeader/>
                {/* <HomeBody/> */}
            </div>
        )
    }
}