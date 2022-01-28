<template>
	<view>
		用户名：
		<input placeholder="请输入" :value="loginFormData.username" />
		密码：
		<input placeholder="请输入" password :value="loginFormData.password" />
		<button type="default" size="mini" @clcik="login" style="margin-top: 15px;">登录</button>
	</view>
</template>

<script>
export default {
	name: 'Login',
	data() {
		return {
			loginFormData: {
				username: '',
				password: ''
			}
		};
	},
	methods: {
		login() {
			console.log('登陆了');
			console.log(this.loginFormData);
			/* uni.reLaunch({
				url: '/pages/home/home'
			}); */
		}
	}
};
</script>

<style></style>
