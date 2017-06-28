<template>
	<div class="l-tickit">
		<x-header style="color:white">兑换追书券<a slot="right" href="/"></a></x-header>
        <div class="exchangeTickit-content">
            <input placeholder="请输入兑换码" name="">
            <x-button type="warn">兑换追书券</x-button>
        </div>
	</div>
</template>

<script>

import { XHeader, XButton } from 'vux'
export default {
  components: {
  	XHeader,
    XButton
  },
  data () {
    return {
      
    }
  },
}
</script>

<style lang = "less">
.l-tickit{
	top: 0;
	position: fixed;
	height:100vh ;
	width: 100vw;
	background: #fff;
}
.l-tickit .vux-header{
	background: #b93321;
	height: 1.17333rem;
}
.l-tickit .vux-header .vux-header-right a{
	display: block;
	height: 1.17333rem;
	line-height:  1.17333rem;
	width: 0.4rem;
	background: url(../assets/home.png) no-repeat center;
	background-size: 125% 50%;
	margin-top: -0.4rem;
}
.l-tickit .vux-header .vux-header-left{
    width: 1.6rem;
    text-align: center;
    top: 10px;
    font-size: 14px;
}
.l-tickit .vux-header .vux-header-left a{
	font-size: 12px;
	color: white;
}
.l-tickit .vux-header .vux-header-title, .vux-header h1 {
	
	line-height: 33px;
	font-size: 14px;
}
.l-tickit .vux-header .vux-header-left .vux-header-back{
	color: #fff;
}
.l-tickit .vux-header .vux-header-left .left-arrow:before {
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
.l-tickit .exchangeTickit-content{
    padding: 0.8rem 0.53333rem;
}
.l-tickit input{
    width: 94%;
    height: 1.2rem;
    line-height: 1.2rem;
    padding-left: 0.4rem;
    color: #222;
    font-weight: 400;
}
.l-tickit .weui-btn{
    height: 1.2rem;
    line-height: 1.2rem;
    margin-top: 0.8rem;
    color: #fff;
    background: #999;
    font-size: 12px;
}
</style>

