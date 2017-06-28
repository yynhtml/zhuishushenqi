<template>
	<div class="list1">
	 <x-header style="color:white">{{zh}}<a slot="right" href="/"></a></x-header>
		<div class="topchose">
		    <tab :animate="false">
		      <tab-item  selected>热门</tab-item>
		      <tab-item >新书</tab-item>
		      <tab-item>好评</tab-item>
		      <tab-item>完结</tab-item>
		      <tab-item >包月</tab-item>
		      
		    </tab>
		</div>
		<div class="topchose1">
		    <tab :animate="false">
		      <tab-item  selected>全部</tab-item>
		      <tab-item>东方玄幻</tab-item>
		      <tab-item>异界大陆</tab-item>
		      <tab-item>异界争霸</tab-item>
		      <tab-item>远古神话</tab-item>
		     </tab>
		</div>
		<boy-like></boy-like>
	</div>
</template>

<script>
	import { XHeader, Actionsheet, TransferDom,Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem,Cell, CellBox, CellFormPreview, Group, Badge,Search,Panel,Radio,Grid,GridItem,ButtonTabItem,Masker, ButtonTab,Flexbox,FlexboxItem  } from 'vux'
	import jsonp from 'jsonp'
	import Vue from 'vue'
	export default {
	name:"kindList",
	 directives: {
	    TransferDom
	  },
	  components: {
	  	Tab,
	    TabItem,
	    Sticky,
	    Divider,
	    XButton,
	    Swiper,
	    SwiperItem,
	    XHeader,
	    Actionsheet,
	    Group,
	    Cell,
	    CellFormPreview,
	    CellBox,
	    Badge,
	    Flexbox,
	    FlexboxItem,
	    "boyLike":{
          components:{
            Search,
            Group,
            Cell,
            Panel, 
            Radio,
            Grid, 
            GridItem,
            Masker,
            ButtonTab, 
            ButtonTabItem,
            Flexbox, 
            FlexboxItem,
          },
          template:`<div class="weui-panel weui-panel_access">
		      <div class="weui-panel__bd">
		        <a v-for="item in list2">
		        <router-link :to="{ name: 'Info', params: { id: item._id }}" class="weui-media-box weui-media-box_appmsg">
		          <div class="weui-media-box__hd">
		            <img :src="'http://statics.zhuishushenqi.com'+item.cover" alt="" class="weui-media-box__thumb"/>
		          </div> 
		          <div class="weui-media-box__bd">
		             <p class="y_b_title">{{item.title}}</p>
		             <p class="y_b_shortIntro">{{item.author}}丨{{item.majorCate}}</p>
		            <p class="y_b_shortIntro">{{item.shortIntro}}</p>

		            <div>
		              <p style="float:left;font-size:12px"><span style="color:#b93321;">{{(item.latelyFollower/10000).toFixed(1)}}万</span>人气 | <b style="color:#b93321;">{{item.retentionRatio}}%</b>人收藏</p>
		            </div>
		          </div>
		          </router-link>
		        </a> 
		      </div> 
		    </div>`,
	        created(){
	        	var adress = location.href.split("/")
	        	var l = adress.length-1;
	        	var str = adress[l].replace('%3F',"?");
	 

	        	
	            var url2 ='/book/'+str
	            Vue.axios.get(url2).then((res)=> {
	              return res.data.books
	              }).then((data) =>{
	                
	                this.list2 = data
	                

	              })
	          },
	        data () {
	            return {
	               list2:'',
	               
	            }
	          },
	       }
			    
		},
	created(){
			var adress = location.href.split("/")
        	var l = adress.length-1;
        	var str = adress[l].replace('%3F',"?");
        	var ch = str.split("=");
        	var j = ch.length;
        	this.zh =decodeURIComponent(ch[j-1]);
        	
	},
	  data () {
	    return {
	     showContent004: false,
	     zh:''
   		 }
	  }
	 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "less">
	.list1 .weui-panel{
		background: #f8f8f8;
	}
	.list1{
		top: 0;
		position: fixed;
		height:100vh ;
		width: 100vw;
		background: #fff
	}
	.list1 .vux-header{
		background: #b93321;
		height: 1.17333rem;
	}
	.list1 .vux-header .vux-header-right a{
		display: block;
		height: 1.17333rem;
		line-height:  1.17333rem;
		width: 0.4rem;
		background: url(../assets/home.png) no-repeat center;
		background-size: 125% 50%;
		margin-top: -0.4rem;
	}
	.list1 .vux-header .vux-header-left{
	    width: 1.6rem;
	    text-align: center;
	    top: 10px;
	    font-size: 14px;

	}
	.list1 .vux-header .vux-header-left a{
		font-size: 12px;
		color: white;
	}
	.list1 .vux-header .vux-header-title, .vux-header h1 {
		font-weight: bold;
		line-height: 33px;
		font-size: 14px	;
	}
	.list1 .vux-header .vux-header-left .vux-header-back{
		color: #fff;
	}
	.list1 .vux-header .vux-header-left .left-arrow:before {
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
	.list1 .vux-tab .vux-tab-item.vux-tab-selected{
		border-bottom: none;
		color: #b93321;
	}
	.list1 .vux-tab .vux-tab-item{
		border: none;
		color: #666;
		background: none;
		height: 100%;
		font-size: 13px;
		line-height: 1.2rem;
	}
	.list1 .topchose{
		width: 65vw;
		height: 1.2rem;
	}
	.list1 .topchose .vux-tab{
		height: 1.2rem;
	}
	.list1 .topchose1{
		position: relative;
	}
	.list1 .topchose1 .vux-tab{
		height: 1.2rem;
		font-size: 13px;
		width: 100vw;

	}
	.list .sub-item {
	  color: #888;
	}
	.list .slide {
	  padding: 0 10px;
	  overflow: hidden;
	  max-height: 0;
	  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
	}
	.list .animate {
	  max-height: 9999px;
	  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
	  transition-delay: 0s;
	}
	

	.list1 .topchose1 .weui-cell{
		position: absolute;
		display: block;
		height: 1.2rem;
		width: 2rem;
		font-size: 13px;
		padding: 0;
		top: -.05rem;
		right: -.5rem;
		color: #ab915e;
	}
	.list1 .topchose1 .weui-cell__ft{
		display: block;
	}
	.list1 .topchose1 .weui-cell_access .weui-cell__ft{
		position: absolute;
		top: .655rem;
		right: .7rem;
	}
	.list1 .topchose1 .flex-demo {
	  text-align: center;
	  color: #fff;
	  background-color: #20b907;
	  border-radius: 4px;
	  background-clip: padding-box;
	}
	 .list1 .topchose1 .weui-cell:before{
		border: none;
	}
	.list1 .slide{
		overflow: auto;
		background:#f8f8f8;
		height: 80vh;
	}
	.list1 .vux-divider{
		display: block;
		padding : 0;
		margin: 0;
		text-align: left;
		height: .66667rem;
	    line-height: .66667rem;
	    font-weight: 400;
	    color: #999; 
	    font-size: 12px;
	    
	}
	.list1 .topchose1 .flex-demo{
		color: #666;
		background: #fff;
		font-size: 12px;
		width: 2rem;
    	height: .7rem;
    	line-height: .7rem;
    	border: 1px solid #ebebeb;
   		border-radius: 2px;
   		margin-left: .15rem;
	} 
	.list1 .vux-flexbox .vux-flexbox-item{
		width: 2rem;
   		height: .7rem;
   		
   		margin-top: .2rem!important
	}
	.list .vux-flex-row{
		margin-bottom: 0.3rem;
	}
	.pad{
		padding-top:.4rem ;
	}
	.list1 .vux-flexbox .vux-flexbox-item:first-child{
		margin-top: 0.2rem!important;

	}
	.list1 .vux-label{
		margin-top: 0.35rem;
	}
	.list1 .weui-panel{
		height: 80vh;
		overflow: auto
	}
	.list1 .y_b_shortIntro{
		height: .53333rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    font-size: 12px;
	    color: #666;
	}
	.list1 .y_b_title{
		color: #333;
		font-size: 14px;
		font-weight: bold;
	}
	.list1 .weui-media-box__hd{
		margin-right: 0.4em;
	}
	.list1 .weui-media-box_appmsg .weui-media-box__bd{
		padding-bottom: .3rem
	}
	.list1 .c-app-book-list {
    background-color: #f5f2ed;
	}
	.list1 .weui-panel__bd{
		background: #f5f2ed
	}
</style>
