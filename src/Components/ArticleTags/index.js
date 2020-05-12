/*
 * @Author: Litao 
 * @Date: 2020-05-12 14:04:40 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-05-12 15:04:32
 */

import React from 'react'

import './index.css'

import Label from '../Label'

export default class ArticleTags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tagsArr: [
                { borderColor: '#FFCC00', txt: 'Python', status: 'rotate' },
                { borderColor: '#CC0066', txt: 'Javascript', status: 'hover' },
                { borderColor: '#000033', txt: 'HTML', status: 'skew' },
                { borderColor: '#009999', txt: 'CSS', status: 'skew' },
                { borderColor: '#99FF00', txt: 'Java', status: 'hover' },
                { borderColor: '#003333', txt: 'Typescript', status: 'rotate' },
                { borderColor: '#00CCCC', txt: 'Go', status: 'skew' },
                { borderColor: '#CC6699', txt: 'Mobx', status: 'rotate' },
                { borderColor: '#FF6633', txt: 'React', status: 'skew' },
                { borderColor: '#3366CC', txt: 'Vue', status: 'hover' },
                { borderColor: '#660000', txt: 'Angulr', status: 'hover' },
                { borderColor: '#CCFF00', txt: 'Redux', status: 'rotate' },
            ]
        }
    }

    getTags = (e) => {
        console.log(e.target.innerText)
    }

    render() {
        const { tagsArr } = this.state
        let tags = tagsArr.map(item => {
            return <Label
                borderColor={item.borderColor}
                txt={item.txt}
                status={item.status}
            />
        })
        return (
            <div className="tagsContainer">
                <div className="tagsTop">
                    <p><i className="iconfont icon-biaoqian"></i><span>个性标签分类</span></p>
                </div>
                <p className="line"></p>
                <div className='tagsBottom' onClick={this.getTags}>
                    {tags}
                </div>
            </div>
        )
    }
}
