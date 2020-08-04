/*
 * @Author: houxiaoling 
 * @Date: 2020-07-31 17:03:24 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-08-04 15:16:25
 */
import React, { Component } from 'react'
import { api } from '../../models/api'

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userList:[]
        }
    }

    componentDidMount() {
        api.getUsers( {info:'xxx'}, res=>{
            if (res.code === 200) {
                this.setState({
                    userList: res.data
                })
            }
        })
    }

    render () {
        const { userList } = this.state
        console.log(userList)
        return (
            <div>
                {
                    userList.map(user => {
                        return <p key={user.uid}>{user.name}</p>
                    })
                }
            </div>
        )
    }
}
