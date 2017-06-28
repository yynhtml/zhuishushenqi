<template>
<div>
	<div>
		<group-title>男生</group-title>
	    <grid :rows="3">
	      <grid-item v-for="i in arr" :key="i">
	      <span class="grid-center"><router-link :to="{name:'kindList',params:{id:'by-categories?gender=male&type=hot&major='+i.name}}" class="link">{{i.name}}</router-link></span>
	        <span class="count">{{i.bookCount}} 本</span>
	      </grid-item>
	    </grid>
    </div>
    <div>
		<group-title>女生</group-title>
	    <grid :rows="3">
	      <grid-item v-for="i in brr" :key="i">
	        <span class="grid-center"><router-link :to="{name:'kindList',params:{id:'by-categories?gender=female&type=hot&major='+i.name}}" class="link">{{i.name}}</router-link></span>
	        <span class="count">{{i.bookCount}} 本</span>
	      </grid-item>
	    </grid>
    </div>
    <div>
		<group-title>出版</group-title>
	    <grid :rows="3">
	      <grid-item v-for="i in crr" :key="i">
	        <span class="grid-center"><router-link :to="{name:'kindList',params:{id:'by-categories?gender=press&type=hot&major='+i.name}}" class="link">{{i.name}}</router-link></span>
	        <span class="count">{{i.bookCount}} 本</span>
	      </grid-item>
	    </grid>
    </div>	
   </div>

</template>

<script>
	import Vue from 'vue'
	import { Grid, GridItem, GroupTitle } from 'vux'
	import jsonp from 'jsonp'

	export default {
	  components: {
	    Grid,
	    GridItem,
	    GroupTitle
	  },
	  data(){
	  		return{
	  			arr:'',
	  			brr:'',
	  			crr:''
	  		}
	  },
	  methods: {
	    onItemClick () {
	     
	    }
	  },
	  created(){
	  	var url = "/cats/lv2/statistics"
	  	 
	    Vue.axios.get(url).then((res)=> {
	        return  res.data
		      }).then((data)=> {
		      	this.arr = Array.prototype.slice.call(data.male);
		       
		        
		      }),
		Vue.axios.get(url).then((res)=> {
	        return  res.data.female
		      }).then((data)=> {
		        
		        	
		        	
		        	this.brr = data;
		        	
		         	

		      }),
		Vue.axios.get(url).then((res)=> {
	        return  res.data.press
		      }).then((data)=> {
		        
		       
		        	
		        	this.crr = data;
		        	
		       

		      })
	  },
	  computed:{
        spliceStr:function(){
            this.arr = Array.prototype.slice.call(this.arr);
            return this.arr.map(item=>{ 
                return item
             })
        }
    }
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	a{
		text-decoration:none
	}
	.grid-center {
	  display: block;
	  text-align: center;
	  color: #666;
	}
	.weui-grid{
		font-size: 15px;
		display: inline-block;
	    vertical-align: middle;
	    height: 1.6rem;
	    padding: .26667rem;
	    text-align: center;
	}
	.active-6-1 {
		  color: rgb(252, 55, 140) !important;
		  border-color: rgb(252, 55, 140) !important;
		}
		.active-6-2 {
		  color: #04be02 !important;
		  border-color: #04be02 !important;
		}
		.active-6-3 {
		  color: rgb(55, 174, 252) !important;
		  border-color: rgb(55, 174, 252) !important;
		}
	.count{
		display: block;
	    line-height: .53333rem;
	    font-size: 12px;
	    color: #ccc;
	}
	.grid-center{
		display: block;
	    line-height: .53333rem;
	    font-size: 15px;
	    font-weight: 700;
	    color: #333;
	}
	.weui-cells__title{
	    padding: 0 .4rem;
	    height: 1.6rem;
	    line-height: 1.6rem;
	    font-weight: 400;
	    margin:0;
	}
	.link{
		color:black
	}
</style>
