/*
 * @Author: houxiaoling 
 * @Date: 2020-07-31 11:55:39 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-09-18 18:02:43
 */
import exp from './exp'
let { AxiosGet, AxiosPost } = exp

let url = 'http://127.0.0.1:3001'

let api = {
    getUrl: () => {
        return url;
    },
    getUsers: ( data,callback ) => {
        let uri = url + '/users/queryAll'
		AxiosGet({
			url: uri,
			data: data,
			reback: (res) => {
				callback(res)
			}
		})
    },
    getArticleByType: ( data,callback ) => {
        let uri = url + '/articles/queryByType'
		AxiosPost({
			url: uri,
			data: data,
			reback: (res) => {
				callback(res)
			}
		})
    },
    getAllWhisper: ( data,callback ) => {
        let uri = url + '/whispers/queryAll'
		AxiosGet({
			url: uri,
			data: data,
			reback: (res) => {
				callback(res)
			}
		})
    },
    getAllLeacots: ( data,callback ) => {
        let uri = url + '/leacots/queryAll'
		AxiosGet({
			url: uri,
			data: data,
			reback: (res) => {
				callback(res)
			}
		})
    },
    queryArticleClassify: ( data, callback ) => {
        let uri = '/articles/queryArticleClassify'
		AxiosGet({
			url: uri,
			data: data,
			reback: (res) => {
				callback(res)
			}
		})
    },
}

export { api }