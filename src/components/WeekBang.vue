<template>
	<div class="l-hot">
		<div class="inner clearfix" v-for="item in arr">
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
</template>

<script>
	import Vue from "vue"
	import jsonp from 'jsonp'
export default {
  components: {


  },
  data () {
    return {
      arr:""
    }
  },
  created () {
  	var arr = location.href.split("/");
  	var l = arr.length;
  	var str = arr[l-1];
  	var url = "/ranking/"+str;
  	Vue.axios.get(url).then((res) => {
  		return res.data.ranking.books;
  	}).then((data) => {
  		var arr = [];
  		for(var i=0; i<30; i++ ){
  			arr.push(data[i]);
  			this.arr = arr;
  		}
  	})
  }
}
</script>

<style lang = "less">
.l-hot{
	height: 100vh;
	padding-left: 0.4rem;
	padding-bottom: 1.44rem;
	overflow: auto;
	background: #f5f2ed;
	position: absolute;
	left: 0;
	top: 3rem;
	margin-top: -0.4rem;
}
.l-hot .inner{
	display: block;
	padding: 0.4rem 0.4rem 0.4rem 0;
}
.l-hot .cover{
	float: left;
	width: 1.6rem;
	height: 2rem;
	border: 1px solid #ebebeb;
	background: url('../assets/loading.gif') no-repeat;
	background-size: 100%;
	overflow: hidden;
}
.l-hot .inner .cover img{
	max-width: 100%;
	border: none;
}
.l-hot .inner .right{
	height: 2rem;
	margin-left: 2rem;
	font-size: 12px;
}
.l-hot .name{
	height: .53333rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	line-height: 0.50667rem;
	color: #333;
	font-size: 14px;
}
.l-hot .right p{
	height: 0.53333rem;
	line-height: 0.53333rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	color: #999;
	font-size: 12px;
}
.l-hot .right .split{
	/* display: block */
	padding: 0 0.26667rem;
	font-size: 12px;
}
.l-hot .reight .importtant{
	color: #666;
}
.l-hot .c-red{
	color: #b93321;
}
</style>

