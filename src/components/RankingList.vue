<template>
	<div id="wrapper">
	<x-header style="color:white">{{title}}<a slot="right"></a></x-header>
		<div>
       		<tab :line-width=2 active-color='#fff' v-model="index">
       			<tab-item  class="vux-center" v-for="(item, index) in list2" :key="index" ><router-link :to="item.path" >{{item.name}}</router-link></tab-item>
      		</tab>
    	</div>
    	<div class="l-hot1">
		<div class="inner clearfix" v-for="item in arr1">
		<router-link :to="{ name: 'Info', params: { id: item._id }}">
			<div class="cover">
				<img :src='"http://statics.zhuishushenqi.com"+item.cover'/>
			</div>
			<div class="right">
				<h4 class="name">{{item.title}}</h4>
				<p>{{item.author}}<span class="split">|</span><span>{{item.cat}}</span></p>
				<p>{{item.shortIntro}}</p>
				<p class="important"><span class="c-red">{{(item.latelyFollower/10000).toFixed(1)}}万</span>人气<span class="split">|</span><span><span class="c-red">{{item.retentionRatio}}</span><span>读者留存</span></span></p>
			</div>
		</router-link>
		</div>
	</div>	
    <router-view></router-view>
	</div>

</template>

<script>
import { XHeader } from 'vux'
import { Tab, TabItem } from 'vux'
	import Vue from "vue"
	import jsonp from 'jsonp'
export default {
	name:"RankingList",
	components: {
		XHeader,
		Tab,
    	TabItem	
	},
	data () {
		return {
      		list2: [
					{
						name:'周榜',
						path:{ name: 'WeekBang', params: { id: "123" }}
					},
					{
						name:'月榜',
						path:{ name: 'MonthBang', params: { id: "444" }}
					},
					{
						name:'总榜',
						path:{ name: 'AllBang', params: { id: "3333" }}
					}
				],
      		index: 0,
      		getBarWidth: function (index) {
        		return (index + 1) * 22 + 'px'
      		},
      		arr1:"",
      		title:""
      	}
	},
	created () {
		var str = location.href.split("/");
		var l = str.length;
		var pathId = str[l-1];
		var arr = this.list2;
		for(var i = 0,len = arr.length;i < len;i++){
			arr[i].path.params.id = pathId;
		}
		this.list2 = arr;
  	var url = "/ranking/"+pathId;
  	Vue.axios.get(url).then((res) => {
  	
  		return res.data.ranking;
  	}).then((data) => {
  		this.title = data.title;
  		var arr1 = [];
  		
  		var data = data.books;
  		for(var i=0; i<30; i++ ){
  			arr1.push(data[i]);
  			this.arr1 = arr1;
  		}
  	})
	},
	methods: {
    onItemClick (index) {
      

    }

  },
   
}

</script>

<style lang = "less">
#wrapper{
	top: 0;
	position: fixed;
	height:100vh ;
	width: 100vw;
}
#wrapper .vux-tab{
  background:#fff; 
  height:1.44rem
}
#wrapper .tab-swiper {
  background-color: #b93321;
  height: 1.44rem;
}
#wrapper .vux-tab .vux-tab-item a{
  display:block;
  color:#999;
  line-height:1.44rem;
}
#wrapper .vux-header{
	background: #b93321;
	height: 1.17333rem;
}
#wrapper .vux-header .vux-header-right a{
	display: block;
	height: 1.17333rem;
	line-height:  1.17333rem;
	width: 0.4rem;
	background: url(../assets/home.png) no-repeat center;
	background-size: 125% 50%;
	margin-top: -0.4rem;
}
#wrapper .vux-header .vux-header-left{
    width: 1.6rem;
    text-align: center;
    top: 10px;
    font-size: 14px;
}
#wrapper .vux-header .vux-header-left a{
	font-size: 12px;
	color: white;
}
#wrapper .vux-header .vux-header-title, .vux-header h1 {
	
	line-height: 33px;
	font-size: 14px;
}
#wrapper .list .vux-header .vux-header-left .vux-header-back{
	color: #fff;
}
#wrapper .vux-header .vux-header-left .left-arrow:before {
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
#wrapper .active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
#wrapper .active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
#wrapper .active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
#wrapper .tab-swiper {
  background-color: #fff;
  height: 100px;
}
.l-hot1{
	height: 100vh;
	padding-left: 0.4rem;
	padding-bottom: 1.44rem;
	overflow: auto;
	background: #f5f2ed
}
.l-hot1 .inner{
	display: block;
	padding: 0.4rem 0.4rem 0.4rem 0;
}
.l-hot1 .cover{
	float: left;
	width: 1.6rem;
	height: 2rem;
	border: 1px solid #ebebeb;
	background: url('../assets/loading.gif') no-repeat;
	background-size: 100%;
	overflow: hidden;
}
.l-hot1 .inner .cover img{
	max-width: 100%;
	border: none;
}
.l-hot1 .inner .right{
	height: 2rem;
	margin-left: 2rem;
	font-size: 12px;
}
.l-hot1 .name{
	height: .53333rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	line-height: 0.50667rem;
	color: #333;
	font-size: 14px;
}
.l-hot1 .right p{
	height: 0.53333rem;
	line-height: 0.53333rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	color: #999;
	font-size: 12px;
}
.l-hot1 .right .split{
	/* display: block */
	padding: 0 0.26667rem;
	font-size: 12px;
}
.l-hot1 .reight .importtant{
	color: #666;
}
.l-hot1 .c-red{
	color: #b93321;
}
</style>
