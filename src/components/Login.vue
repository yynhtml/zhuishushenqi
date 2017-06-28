<section></section>

<template>
	<div class="l-login">
		<x-header style="color:white">登录<a slot="right" href="/"></a></x-header>
		<div class="section">
			<div class="title"></div>
			<div class="login">
				<div class="channel channel-qq">
					<router-link to="./personal">
						<div class="qq"></div>
						<p>QQ</p>
					</router-link>
				</div>
				<div class="channel channel-weibo">
					<router-link to="/personal">
						<div class="weibo"></div>
						<p>微博</p>
					</router-link>
				</div>
			</div>
		</div>
		<div class="fixed">
			<div class="page-homeFooter-wraper">
				<div class="homeFooter-top">
					<div class="search">
						<div class="search-icon"></div>
						<input type="text" name="">
						<div class="search-btn">
							<button>搜索</button>
						</div>
					</div>
					<div class="category">
                        <router-link to="/"><span>首页</span></router-link>
                        <router-link to="/classify"><span>分类</span></router-link>
                        <router-link to="/ranking"><span>排行</span></router-link>
                        <router-link to="/bookList"><span>书单</span></router-link>
                        <router-link to="/personal">我的</span></router-link>
                      </div>
					<div class="co-info">ICP备：浙ICP备11045712号    Copyright © 2013 All rights reserved.</div>
				</div>
				<div class="c-bottom-app-download clearfix">
					<div class="app-icon"></div>
					<div class="app-desc"><p>追书神器服务号</p><p>微信看书更方便，天天签到免费看</p>
					</div><a class="app-link" href="/signin">立即关注</a></div>
			</div>
		</div>
	</div>
</template>

<script>

import { XHeader } from 'vux'
export default {
  components: {
  	XHeader
  },
  data () {
    return {
      
    }
  },
}
</script>

<style lang = "less">
a{
	text-decoration: none;
}
.l-login{
	top: 0;
	position: fixed;
	height:100vh ;
	width: 100vw;
	background: #f4f4f4;
}
.l-login .vux-header{
	background: #b93321;
	height: 1.17333rem;
}
.l-login .vux-header .vux-header-right a{
	display: block;
	height: 1.17333rem;
	line-height:  1.17333rem;
	width: 0.4rem;
	background: url(../assets/home.png) no-repeat center;
	background-size: 125% 50%;
	margin-top: -0.4rem;
}
.l-login .vux-header .vux-header-left{
    width: 1.6rem;
    text-align: center;
    top: 10px;
    font-size: 14px;
}
.l-login .vux-header .vux-header-left a{
	font-size: 12px;
	color: white;
}
.l-login .vux-header .vux-header-title, .vux-header h1 {
	
	line-height: 33px;
	font-size: 14px;
}
.l-login .vux-header .vux-header-left .vux-header-back{
	color: #fff;
}
.l-login .vux-header .vux-header-left .left-arrow:before {
    border: 1px solid #fff;
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-width: 1px 0 0 1px;
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
    top: 10px;
    left: 7px;
}
.l-login .login {
    position: absolute;
    top: 4.8rem;
    width: 55%;
    padding: 0 2.26667rem;
}
.l-login .title{
	position:  absolute;
	top: 3.2rem;
	left: 50%;
	margin-left: -2.74667rem;
	background: url('../assets/title.png');
	background-size: 100%;
	background-position: 50%;
	height: 0.4rem;
	width: 5.41333rem;
	font-size: 12px;
}
 .l-login .channel-qq {
    font-size: 28px;
    color: #4d99e7;
}
 .l-login .channel {
    position: relative;
    display: inline-block;
    text-align: center;
}
 .l-login .qq{
 	display: inline-block;
 	width: 1.3333rem;
 	height: 1.3333rem;
 	background: url('../assets/qq.png');
	background-size: 100%;
	background-position: 50%;
 }
 .l-login .login .channel p{
 	margin-top: 0.32rem;
 	font-size: 12px;
 }
.l-login .channel-weibo {
    float: right;
    font-size: 24px;
}
.l-login .channel-weibo a {
    width: 100%;
    height: 100%;
    display: inline-block;
    color: #e34737;
}
 .l-login .weibo{
 	display: inline-block;
 	width: 1.3333rem;
 	height: 1.3333rem;
 	background: url('../assets/wb.png');
	background-size: 100%;
	background-position: 50%;
 }
 .l-login .channel-weibo {
    float: right;
    font-size: 24px;
}
.l-login .section{
	position: relative;
	width: 100%
}
.l-login .fixed{
	width: 100%;
	position: absolute;
	bottom: 0;
}
.l-login .page-homeFooter-wraper{
	background: #f4f4f4;
	width: 100%;
}
.l-login .page-homeFooter-wraper .homeFooter-top {
    padding: .46667rem 0 .33333rem;
    width: 100%;
}
.l-login .page-homeFooter-wraper .homeFooter-top .search {
    position: relative;
    padding: 0 .4rem;
    margin: 0;
    display: inline-block;
    width: 95%;
}
.l-login .page-homeFooter-wraper .homeFooter-top .search .search-icon {
    position: absolute;
    top: 0;
    left: .4rem;
    width: .8rem;
    height: .8rem;
    background: url("../assets/search.png") no-repeat;
    background-size: 50%;
    background-position: 50%;
}
.l-login .page-homeFooter-wraper .homeFooter-top .search input {
    float: left;
    width: 72%;
    height: .8rem;
    padding-left: .8rem;
    border: 1px solid #ebebeb;
    border-radius: 2px;
    -webkit-appearance: none;
    color: #222;
    font-weight: 400;
}
.l-login .page-homeFooter-wraper .homeFooter-top .search .search-btn {
    width: 14.5%;
    display: inline-block;
    padding-left: .13333rem;
    position: absolute;
    right: .4rem;
    top: -0.4555rem
}
.l-login .page-homeFooter-wraper .homeFooter-top .search .search-btn button {
    width: 90%;
    height: .8rem;
    border-radius: 2px;
    border: 1px solid #ebebeb;
    background: #fff;
}
.l-login .page-homeFooter-wraper .homeFooter-top .category {
    width: 100%;
    height: .8rem;
}
.l-login .page-homeFooter-wraper .homeFooter-top .category a {
    height: .8rem;
    padding-top: 9px;
    float: left;
    display: block;
    width: 20%;
    color: #333;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
}
.l-login .page-homeFooter-wraper .homeFooter-top .category a span {
    width: 100%;
    display: inline-block;
}
.l-login .page-homeFooter-wraper .homeFooter-top .co-info {
    margin-top: .4rem;
    color: #999;
    text-align: center;
    font-size: 10px;
    padding: 0 0.2rem;
}
.l-login .c-bottom-app-download {
	position: relative!important;
	background: #f4f4f4;
	left: 0;
	bottom: 0;
	width: 91%;
	height: 1.6rem;
	padding: 0rem 0.4rem 0.26667rem 0.53333rem;
	color: #fff;
}
.l-login .c-bottom-app-download .app-icon {
    display: inline-block;
    vertical-align: middle;
    width: 1.06667rem;
    height: 1.06667rem;
    border-radius: 2px;
    background-color: #ccc;
    background: url("../assets/zhui.png") no-repeat;
    background-size: cover;
}
.l-login .c-bottom-app-download .app-desc {
    display: inline-block;
    vertical-align: middle;
    line-height: .53333rem;
}
.l-login .c-bottom-app-download .app-link {
    float: right;
    width: 1.86667rem;
    height: .74667rem;
    line-height: .74667rem;
    margin-top: .6rem;
    background-color: #b93321;
    color: #fff;
    border-radius: 2px;
    text-align: center;
    font-size: 12px;
}
.l-login .page-homeFooter-wraper .c-bottom-app-download .app-desc p:first-child {
    color: #b93321;
    font-size: 12px;
}
.l-login .page-homeFooter-wraper .c-bottom-app-download .app-desc p:last-child {
    color: #999;
    font-size: 12px;
}
.l-login .clearfix{
	zoom: 1;
}
</style>

