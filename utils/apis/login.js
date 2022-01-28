import request from '../request.js';

/**
 * 登录
 * @param {Object} data 登录信息
 * @return {Promise} 返回信息
 */
export function login(data) {
	return request({
		url: '/login',
		method: 'POST',
		data
	})
}