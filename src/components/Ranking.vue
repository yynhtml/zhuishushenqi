<template>
<div>
	
	<div id="boy">
		<h3>男生</h3>
		<div v-for="item in boyarr" :title="item.title">
			<!-- <router-link to="/">
		    		 123123
		    </router-link> -->
		</div>
		<group>
		    <cell v-for="item in boyarr" :title="item.title">
	    	  	<router-link :to="{ name: 'RankingList', params: { id: item._id }}">
	    	  		<img :src='item.url' alt=""> 
	    	  	</router-link>
		</cell>
			 
		    <cell title="别人家的排行榜" is-link :border-intent="false" :arrow-direction="showContent003 ? 'up' : 'down'" @click.native="showContent003 = !showContent003">
		    </cell>
		    <img src="../assets/icon10.png" alt="" class="other" />	

		    <template v-if="showContent003">
		        <cell-box :border-intent="false" class="sub-item" v-for="item in boyNewarr">
			        <router-link :to="{ name: 'RankingList', params: { id: item._id }}">
			        	{{item.title}}
			        </router-link>
		        </cell-box>
		    </template>

	    </group>  
	</div>
	<div id="girl">
		<h3>女生</h3>
		<group>
		    <cell v-for="item in girlarr" :title="item.title">
		    <router-link :to="{ name: 'RankingList', params: { id: item._id }}">
		    	<img :src='item.url' alt="">
		    </router-link>
		    </cell>

		    <cell title="别人家的排行榜" is-link :border-intent="false" :arrow-direction="showContent003 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></cell>
		    <img src="../assets/icon10.png" alt="" class="other" />	

		    <template v-if="showContent002">
		        <cell-box :border-intent="false" class="sub-item" v-for="item in girlNewarr">
		        	<router-link :to="{ name: 'RankingList', params: { id: item._id }}">
			        	{{item.title}}
			        </router-link>
		        </cell-box>
		    </template>

	    </group>
	</div>
</div>
</template>

<script>
	import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
	import Vue from "vue"
	import jsonp from 'jsonp'
export default {
  mounted () {
    setTimeout(() => {
      this.money = -1024
    }, 2000)
  },
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge
  },
  methods: {
    onClick () {
     
    }
  },
  data () {
    return {
    	boyarr: "",
    	boyNewarr: "",
    	girlarr: "",
    	girlNewarr: "",
    	showContent003: false,
    	showContent002: false,
    	// test:"/rankingList/"
    }
  },
  created(){
  	// var url = "../../static/rankingList.json"
  	var url = "ranking/gender"
  	Vue.axios.get(url).then((res) => {
  		return res.data.male;
  	}).then((data) => {
  		var col = [];
  		var col1 = [];
  		var url = [];
  		for(var i=0;i<data.length;i++){
  			if(data[i].collapse == false){
  				col.push(data[i]);
		  		col[i].url = "http://statics.zhuishushenqi.com"+data[i].cover;
  				this.boyarr = col;

  			}else{
  				col1.push(data[i]);
  				this.boyNewarr = col1;
  			}
  		}
  	}),
	  Vue.axios.get(url).then((res) => {
	  		return res.data.female;
	  	}).then((data) => {
	  		var girlCol = [];
	  		var girlCol1 = [];
	  		for(var j=0;j<data.length;j++){
	  			if(data[j].collapse == false){
	  				girlCol.push(data[j]);
	  				girlCol[j].url = "http://statics.zhuishushenqi.com"+data[j].cover;
	  				this.girlarr = girlCol;
	  			}else{
	  				girlCol1.push(data[j]);
	  				this.girlNewarr = girlCol1;
	  			}
	  		}
	  	})
  }
}


  		
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#boy,#girl{
	position: relative;
}
#boy h3,#girl h3{
	margin:0;
	padding-left:0.4rem;
	height:1.44rem;
	line-height:1.44rem;
	font-weight:400;
	color:#999;
	font-size:12px;
    background:#e6e6e6;
    margin-bottom:-0.68rem
}

.vux-no-group-title{
	margin:0!important;
}
#boy .weui-cell,#girl .weui-cell{
	padding:0;
	height:1.6rem;
	color:#333;
	font-size:14px;
	line-height:1.6rem;
	padding-left:1.46667rem;
	border:0;
}
#boy .weui-cell a,#girl .weui-cell a{
	color:#333;	
}
img{
	position: absolute;
	left: 0.4rem;
	top: 0.4rem;
	width:0.8rem;
	height:0.8rem;

}
#boy .weui-cell p,#girl .weui-cell p{
	margin:0;
}
.weui-cell:before{
	border:none;
}
.weui-cell:after{
	border:none;
}
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
.weui-cells{
	margin:-1.17647059em;
}
.other{
	position: absolute;
	top: 8.36rem;
}
</style>
