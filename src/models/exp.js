/*
 * @Author: houxiaoling 
 * @Date: 2020-07-31 14:41:48 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-07-31 17:52:15
 */
import axios from 'axios'; // 引入axios库

const exp = {
    AxiosGet: (v = { url: '', data: {}, reback: () => { } }) => {
        let { url, data, reback } = v
        data = data || {}
        axios({
            method: 'get',
            url: url,
            data: data,
            timeout: 300000,
            headers: {'Content-Type': 'application/json;charset=utf-8', 'token': '12ssDDdd'}
        })
            .then(function (response) {
                reback(response)
            })
            .catch(function (error) {
                console.log(error);
                reback(error)
            });
    },
    AxiosPost: (v = { url: '', data: {}, reback: () => { } }) => {
        let { url, data, reback } = v
        data = data || {}
        axios({
            method: 'post',
            url: url,
            data: data,
            timeout: 300000,
            headers: {'Content-Type': 'application/json;charset=utf-8'},
        })
            .then(function (response) {
                reback(response)
            })
            .catch(function (error) {
                console.log(error);
                reback(error)
            });
    }
}

export default exp
