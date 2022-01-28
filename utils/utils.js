// utils.js

/**
 * 在 Storage 中保存一个数据
 * @param {String} key 键
 * @param {Object} value 值
 */
export function setStorageItem(key, value) {
	uni.setStorageSync(key, value);
}

/**
 * 根据键名获取 Storage 中对应的值
 * @param {String} key 键
 * @return 键所对应的值
 */
export function getStorageItem(key) {
	return uni.getStorageSync(key)
}

/**
 * 清空 Storage
 */
export function clearStorage() {
	uni.clearStorage()
}