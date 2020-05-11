/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:23:29 
 * @Last Modified by:   Litao 
 * @Last Modified time: 2020-05-11 17:23:29 
 */

import React from 'react'

import './index.css'

class NavigationBar extends React.Component {
    constructor(props) {
        super()

    }

    render() {
        return (
            <div className="package">
                <div className="box effect7">
                    <div className="popup">1</div>
                    <div className="popup">2</div>
                    <div className="popup">3</div>
                    <div className="popup">4</div>
                    <div className="popup">5</div>
                    <div className="popup">6</div>
                    <div className="popup">7</div>
                    <div className="popup">8</div>
                </div>
            </div>
        )
    }
}

export default NavigationBar