<template>
  <div id="app">
    <x-header :left-options="{showBack: false}">
      
    <router-link to="/myBook"><h1><span></span>我的书架</h1></router-link>
      <router-link to="/login"><i></i></router-link>
     </x-header>
	 <div>
       <tab :line-width=2 active-color='#fff' v-model="index">
       <tab-item  class="vux-center" v-for="(item, index) in list2" :key="index" ><router-link :to="item.path" >{{item.name}}</router-link></tab-item>
      </tab>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

import {XHeader, Tab,TabItem} from 'vux'

// const list = () => ['首页', '分类', '排行', '书单', '包月']
const list = () => [{name:'首页',path:'/'}, {name:'分类',path:'/classify'},{name:'排行',path:'/ranking'},{name:'书单',path:'/bookList'},{name:'包月',path:'/month'}]

export default {
 components: {
   XHeader,
    Tab,
    TabItem
   
  },
  data () {
    return {
      list2: list(),
      index: 0,
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
      }
    }
  },
  methods: {
    onItemClick (index) {
     
    }
  }
  
}
</script>


<style lang="less" scoped>
div{
  width:100%
}
body {
  background-color: #e6e6e6;
}
a{
  text-decoration:none;
}

.box {
  padding: 15px;
}
.vux-tab{
  background:#c84635;
  
  height:1.06667rem
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
.vux-tab .vux-tab-item a{
  display:block;
  color:#ddada9;
  line-height:1.06667rem;
}
.vux-header{
  position:relative;
  height:1.33333rem;
  background-color:#fff;
  background:url("assets/logo.png") no-repeat 0.4rem 0.4rem;
  background-size:2.533rem 0.6rem;
}
 .vux-header .vux-header-title h1{
  margin:0;
  position:absolute;
  top: 0;
  right:1.2rem;
  height:100%;
  font-size:0.46667rem;
  font-weight:600;
  color:#b93321;
}
 .vux-header .vux-header-title span{
  display: block;
	position:relative;
	height:1.33333rem;
	background-color:#fff!important;
	background:url("assets/logo.png") no-repeat 0.4rem 0.4rem;
	background-size:2.6rem 0.5rem;
}
 .vux-header .vux-header-title h1{
  line-height: 1.3rem;
	margin:0;
	position:absolute;
	top: 0;
	right:1.6rem;
	height:100%;
	font-size:0.35rem;
	font-weight:600;
	color:#b93321;
}
 .vux-header .vux-header-title span{
	display: block;
    height: 0.45rem;
    float: left;
    width: 0.45rem;
    margin-top: 0.4rem;
    margin-right: 0.1rem;
  background:url("assets/book.png") no-repeat;
  background-size:100% 100%;
}
 .vux-header .vux-header-title i{
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 1.2rem;
    height: 100%;
    background: url("assets/own.png") no-repeat;
    background-size: .53333rem .53333rem;
    background-position: 50%;
}
#app{
  overflow:hidden
}

</style>
