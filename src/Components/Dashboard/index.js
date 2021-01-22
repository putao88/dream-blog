/*
 * @Author: houxiaoling 
 * @Date: 2021-01-22 17:29:56 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2021-01-22 17:53:33
 * 统计组件
 */
import React, { Component } from 'react'
import { Row, Col  } from 'antd';
// 引入 ECharts 主模块
import  * as echarts from 'echarts'

import './index.css'



export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
	}

	componentDidMount(){
		this.getOption()
	  }
	  getOption = () => {
		var myChart = echarts.init(document.getElementById('main'));
		myChart.setOption({
		  title: {
			  text: 'ECharts 入门示例'
		  },
		  tooltip: {},
		  xAxis: {
			  data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
		  },
		  yAxis: {},
		  series: [{
			  name: '销量',
			  type: 'bar',
			  data: [5, 20, 36, 10, 10, 20]
		  }]
	  });
	  }
	render () {
		return (
			<div id="main" style={{ width: 400, height: 400 }}></div>
		)
	}
}