<template>
	<div class="l-wrap">
		<x-header style="color:white">个人中心<a slot="right" href="/"></a></x-header>
	    <group>
	    	<h3>账户</h3>
	    	<div style="margin-bottom: 0.26667rem;">
	    		<i class="icon myMoney"></i>
	    		<cell title="我的追书币" link=""></cell>
	    		<div class="money"><span class="zhuishu">0追书币</span><span class="chong">充</span></div>
	    		<i class="icon tickit"></i>
	    		<cell title="我的追书券" link=""></cell>
	    		<i class="arrow-right tmr"></i>
	    		<div class="tmoney" style="right: 1rem;"><span class="zhuishu">0追书券</span></div>
	    		<i class="icon exchange"></i>
	    		<cell title="兑换追书券" link=""></cell>
	    		<i class="arrow-right mr"></i>
	    	</div>
	    	<h3>记录</h3>
	    	<p>
	    		<i class="icon cost"></i>
	    		<cell title="充值记录" link=""></cell>
	    		<i class="arrow-right mar"></i>
	    		<i class="icon pay"></i>
	    		<cell title="消费记录" link=""></cell>
	    		<i class="arrow-right pmr"></i>
	    	</p>
    	</group>
	</div>
</template>

<script>

import { XHeader, TransferDom, Actionsheet, Group, Toast, Cell, XButton } from 'vux'
export default {
  components: {
  	XHeader,
    Actionsheet,
    Group,
    Toast,
    Cell,
    XButton
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
.l-wrap{
	top: 0;
	position: fixed;
	height:100vh ;
	width: 100vw;
	background: #f4f4f4;
}
.l-wrap .vux-header{
	background: #b93321;
	height: 1.17333rem;
    margin-bottom:-0.68rem;
}
.l-wrap .vux-header .vux-header-right a{
	display: block;
	height: 1.17333rem;
	line-height:  1.17333rem;
	width: 0.4rem;
	background: url(../assets/home.png) no-repeat center;
	background-size: 125% 50%;
	margin-top: -0.4rem;
}
.l-wrap .vux-header .vux-header-left{
    width: 1.6rem;
    text-align: center;
    top: 10px;
    font-size: 14px;
}
.l-wrap .vux-header .vux-header-left a{
	font-size: 12px;
	color: white;
}
.l-wrap .vux-header .vux-header-title, .vux-header h1 {
	
	line-height: 33px;
	font-size: 14px;
}
.l-wrap .vux-header .vux-header-left .vux-header-back{
	color: #fff;
}
.l-wrap .vux-header .vux-header-left .left-arrow:before {
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
.l-wrap .weui-cells{
	background: #f4f4f4;
}
.l-wrap h3{
	height: 1rem;
	line-height: 1rem;
	padding: 0 0 0 .46667rem;
	color: #999;
	font-size: 12px;
	font-weight: 400;
	margin: 0;
}
.l-wrap .weui-cells>p{
	margin-bottom: 0.26667rem;
	position: relative;
}
.l-wrap p{
	background: #fff;
	margin: 0;
}
.l-wrap .icon{
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
.l-wrap .arrow-right{
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
.l-wrap .myMoney{
	background-image: url('../assets/icon2.png')
}
.l-wrap .money{
	position: absolute;
	top: 1.2rem;
	right: 0.46667rem;
}
.l-wrap .money .zhuishu{
	color: #b93321;
	font-size: 12px;
}
.l-wrap .money .chong{
	margin-left: .26667rem;
	border-radius: 2px;
	padding: 0.08rem 0.10667rem;
	color: #4caf50;
	border: 1px solid #4caf50;
	font-size: 12px;
}
.l-wrap .tickit{
	background-image: url('../assets/icon7.png');
}
.l-wrap .tmr{
	top: 2.2rem;
}
.l-wrap .tmoney{
	position: absolute;
	top: 2.333rem;
	right: 0.46667rem;
}
.l-wrap .tmoney .zhuishu{
	color: #b93321;
	font-size: 12px;
}
.l-wrap .exchange{
	background-image: url('../assets/icon3.png');
}
.l-wrap .mr{
	top: 3.4rem;
}
.l-wrap .cost{
	background-image: url('../assets/icon8.png');
}
.l-wrap .pay{
	background-image: url('../assets/icon9.png');
}
.l-wrap .pmr{
	top: 1.2rem;
}
.l-wrap .weui-cell,.wrap .weui-cell__bd{
	position: relative;
	width: 100%;
	height: 1.2rem;
	line-height: 1.2rem;
	padding: 0 0 0 0.46667rem;
	background: #fff;
}
.l-wrap .weui-cell:before {
    height: 0;
    border-top: 0;
}
.l-wrap .vux-label{
	margin-left: 1.04rem;
	font-size: 14px;
	color: #222;
}
.l-wrap .weui-label{
	margin-left: 1.04rem;
	font-size: 14px;
	color: #222;
}
.l-wrap .user-info {
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
.l-wrap .user-info .text-gray {
    color: #999;
}
.l-wrap .popup0 {
  padding-bottom:15px;
  height:200px;
}
.l-wrap .popup1 {
  width:100%;
  height:100%;
}
</style>

