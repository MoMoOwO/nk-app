// request.js

import { getStorageItem } from './utils.js'

const BASE_URL = "/api"

export const request = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			dataType: options.dataType || 'json',
			header: {Authorization: getStorageItem('token')},
			success(res) {
				if(res.data.code !== 200){
					return uni.showToast({
						title: "获取数据失败！",
						icon: 'error'
					})
				} else {
					resolve(res.data)
				}
			},
			fail(err) {
				uni.showToast({
					title: "请求接口失败！",
					icon: 'error'
				})
				reject(err)
			}
		})
	})
}