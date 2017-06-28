<template>
	<div class="wrap">
		<x-header style="color:white">个人中心<a slot="right" href="/"></a></x-header>
		<div class="portrait"><img class="masking-img" src="../assets/meinv.jpg" height="435" width="700"><div class="masking"></div><img class="img" src="../assets/meinv.jpg"><div class="name">yyy</div></div>
	    <group>
	    	<p>
	    		<i class="icon myBook"></i>
	    		<cell title="我的书架" link="/myBook"></cell>
	    		<i class="arrow-right"></i>
	    	</p>
	    	<div style="margin-bottom: 0.26667rem;">
	    		<i class="icon myMoney"></i>
	    		<cell title="我的账户" link="/myMoney"></cell>
	    		<div class="money"><span class="zhuishu">0追书币</span><span class="chong">充</span></div>
	    		<i class="icon exchange"></i>
	    		<cell title="兑换追书券" link="/tickit"></cell>
	    		<i class="arrow-right mr"></i>
	    	</div>
	    	<p>
	    		<i class="icon monthly"></i>
	    		<cell title="包月" link=""></cell>
	    		<span class="monthly-nav">购买</span>
	    	</p>
	    	<p>
	    		<i class="icon signIn"></i>
	    		<cell title="每日签到" link=""></cell>
	    		<i class="arrow-right mar"></i>
	    	</p>
	    	<p>
	    		<i class="icon autoPay"></i>
	    		<x-switch title="自动购买" v-model="show5"></x-switch>
	    	</p>
	    	<div class="user-info">用户ID：5940bd6b1e67826c08553c61<span class="text-gray">(长按选择复制)</span></div>
    	</group>
    	<div class="btn"><router-link to="/login">退出登录</router-link></div>
	</div>
</template>

<script>

import { XHeader, TransferDom, Actionsheet, Group, XSwitch, Toast, Cell } from 'vux'
export default {
  components: {
  	XHeader,
    Actionsheet,
    Group,
    XSwitch,
    Toast,
    Cell
  },
  directives: {
    TransferDom
  },
  data () {
    return {
      show5: false,
      showSuccess: false,
    }
  },
}
</script>

<style lang = "less">
.wrap{
	top: 0;
	position: fixed;
	height:100vh ;
	width: 100vw;
	background: #e6e6e6;
}
.wrap .vux-header{
	background: #b93321;
	height: 1.17333rem;
}
.wrap .vux-header .vux-header-right a{
	display: block;
	height: 1.17333rem;
	line-height:  1.17333rem;
	width: 0.4rem;
	background: url(../assets/home.png) no-repeat center;
	background-size: 125% 50%;
	margin-top: -0.4rem;
}
.wrap .vux-header .vux-header-left{
    width: 1.6rem;
    text-align: center;
    top: 10px;
    font-size: 14px;
}
.wrap .vux-header .vux-header-left a{
	font-size: 12px;
	color: white;
}
.wrap .vux-header .vux-header-title, .vux-header h1 {
	
	line-height: 33px;
	font-size: 14px;
}
.wrap .vux-header .vux-header-left .vux-header-back{
	color: #fff;
}
.wrap .vux-header .vux-header-left .left-arrow:before {
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
.wrap .portrait {
    position: relative;
    width: 100%;
    height: 4.02667rem;
    overflow: hidden;  
    margin-bottom:-0.68rem;
}
.wrap .portrait .masking-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 0;
}
.wrap .portrait .masking {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 4.02667rem;
    background: rgba(40,40,40,.9);
}
.wrap .portrait .img {
    position: absolute;
    top: .64rem;
    left: 50%;
    width: 2rem;
    height: 2rem;
    margin-left: -1rem;
    border-radius: 50%;
}
.wrap .portrait .name {
    position: absolute;
    bottom: .64rem;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #fff;
}
img {
    max-width: 100%;
    border: none;
}
.wrap .weui-cells{
	background: #e6e6e6;
}
.wrap .weui-cells>p{
	margin-bottom: 0.26667rem;
	position: relative;
}
.wrap p{
	background: #fff;
	margin: 0;
}
.wrap .icon{
	display: inline-block;
	position: absolute;
	left: 0.46667rem;
	width: 0.77333rem;
	height: 1.2rem;
	background-size: 100%;
	background-position: 50%;
	background-repeat: no-repeat;
	z-index: 999; 
}
.wrap .arrow-right{
	position: absolute;
	right: 0.46667rem;
	top: 0;
	width: 0.24rem;
	height: 1.2rem;
	background-size: 100%;
	background-position: 50%;
	background-repeat: no-repeat;
	background-image: url('../assets/jiantou.png');
	z-index: 999;
}
.wrap .myBook{
	background-image: url('../assets/icon1.png');
}
.wrap .myMoney{
	background-image: url('../assets/icon2.png')
}
.wrap .money{
	position: absolute;
	top: 1.555rem;
	right: 0.46667rem;
}
.wrap .money .zhuishu{
	color: #b93321;
	font-size: 12px;
}
.wrap .money .chong{
	margin-left: .26667rem;
	border-radius: 2px;
	padding: 0.08rem 0.10667rem;
	color: #4caf50;
	border: 1px solid #4caf50;
	font-size: 12px;
}
.wrap .exchange{
	background-image: url('../assets/icon3.png');
}
.wrap .mr{
	top: 2.555rem;
}
.wrap .monthly{
	background-image: url('../assets/icon4.png');
}
.wrap .monthly-nav{
	display: block;
	position: absolute;
	top: 0.3rem;
	right: 0.46667rem;
	width: 1.06667rem;
	height: 0.53333rem;
	line-height: 0.53333rem;
	text-align: center;
	font-size: 12px;
	border-radius: 2px;
	border: 1px solid #b93321;
	color: #b93321;
}
.wrap .signIn{
	background-image: url('../assets/icon5.png');
}
.wrap .mr{
	top: 2.555rem;
}
.wrap .autoPay{
	background-image: url('../assets/icon6.png')
}
.wrap .weui-cell,.wrap .weui-cell__bd{
	position: relative;
	width: 100%;
	height: 1.2rem;
	line-height: 1.2rem;
	padding: 0 0 0 0.46667rem;
	background: #fff;
}
.wrap .weui-cell:before {
    height: 0;
    border-top: 0;
}
.weui-switch, .weui-switch-cp__box{
	width: 1.4rem!important;
	height: 0.5rem!important;
	top: 0.3rem;
	right: 0.46667rem;
    background: #d79d9d;
}
.wrap .weui-switch:before, .wrap .weui-switch-cp__box:before {
    top: 0;
    left: 0;
    width: 1.3rem;
    height: 0.4rem;
    border-radius: 0.3rem;
    background: #d79d9d;
}
.wrap .weui-switch:after, .wrap .weui-switch-cp__box:after{
	top: -0.1rem;
	width: 0.7rem;
	height: 0.6rem;
	border: 0.3rem;
	background: #b93321;
}
.wrap .vux-x-switch.weui-cell_switch {
    padding: 0;
}
.wrap .vux-label{
	margin-left: 1.04rem;
	font-size: 14px;
	color: #222;
}
.wrap .weui-label{
	margin-left: 1.04rem;
	font-size: 14px;
	color: #222;
}
.wrap .user-info {
    margin: .53333rem 0 0;
    padding: .26667rem .46667rem;
    background: #fff;
    color: #666;
    -webkit-user-select: initial;
    -moz-user-select: initial;
    -ms-user-select: initial;
    user-select: none;
    font-size: 12px;
}
.wrap .user-info .text-gray {
    color: #999;
}
.wrap .weui-btn{
	width: 6.90667rem;
	height: 1.06667rem;
	margin: 0.53333rem auto;
	font-size: 16px;
	text-align: center;
	color: #fff;
	background: #b93321;
}
.wrap .popup0 {
  padding-bottom:15px;
  height:200px;
}
.wrap .popup1 {
  width:100%;
  height:100%;
}
.wrap .btn {
    width: 6.90667rem;
    height: 1.06667rem;
    line-height: 1.06667rem;
    margin: 0.53333rem auto;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background: #b93321;
    border-width: 0;
    outline: 0;
    -webkit-appearance: none;
}
.wrap .btn a{
	color: #fff;
}
</style>

