<template>
	<div class="list">
	 <x-header style="color:white">主题书单<a slot="right" href="/"></a></x-header>
		<div class="topchose" @click='hotsc'>
		    <tab :animate="false">
		      <tab-item  selected>本周最热</tab-item>
		      <tab-item >最新发布</tab-item>
		      <tab-item>最多收藏</tab-item>
		    </tab>
		</div>
		<div class="topchose1">
		    <tab :animate="false">
		      <tab-item  selected>全部</tab-item>
		      <tab-item>男生</tab-item>
		      <tab-item>女生</tab-item>
		      <tab-item>玄幻</tab-item>
		      <tab-item>都市</tab-item>
		      <tab-item>总裁</tab-item>
		     </tab>
		     <cell
		      title="筛选"
		      is-link
		      :border-intent="false"
		      :arrow-direction="showContent004 ? 'up' : 'down'"
		      @click.native="showContent004 = !showContent004"></cell>

		      <div class="slide" :class="showContent004?'animate':''" style="overflow:auto">
			      <div class="pad">
			      	<divider>性别</divider>
			      	<flexbox :gutter="0" wrap="wrap">
				      <flexbox-item :span="1/4"><div class="flex-demo">男生</div></flexbox-item>
				      <flexbox-item :span="1/4"><div class="flex-demo">女生</div></flexbox-item>
				    </flexbox>
				    <divider>时空</divider>
			      	<flexbox :gutter="0" wrap="wrap">
				      <flexbox-item :span="1/4" v-for="i in arr"><div class="flex-demo">{{i}}</div></flexbox-item>
				    </flexbox>
				    <divider>情感</divider>
			      	<flexbox :gutter="0" wrap="wrap">
				      <flexbox-item :span="1/4" v-for="i in brr"><div class="flex-demo">{{i}}</div></flexbox-item>
				    </flexbox>
				    <divider>流派</divider>
			      	<flexbox :gutter="0" wrap="wrap">
				      <flexbox-item :span="1/4" v-for="i in crr"><div class="flex-demo">{{i}}</div></flexbox-item>
				    </flexbox>
				    <divider>人设</divider>
			      	<flexbox :gutter="0" wrap="wrap">
				      <flexbox-item :span="1/4" v-for="i in drr"><div class="flex-demo">{{i}}</div></flexbox-item>
				    </flexbox>
				</div>
		      </div> 
		      </div>
		<boy-like></boy-like>
	</div>
</template>

<script>
	import { XHeader, Actionsheet, TransferDom,Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem,Cell, CellBox, CellFormPreview, Group, Badge,Search,Panel,Radio,Grid,GridItem,ButtonTabItem,Masker, ButtonTab,Flexbox,FlexboxItem  } from 'vux'
	import jsonp from 'jsonp'
	import Vue from 'vue'
	export default {
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
		        <router-link :to="{name:'bookListContent',params:{id:item._id}}" class="weui-media-box weui-media-box_appmsg">
		          <div class="weui-media-box__hd">
		            <img :src="'http://statics.zhuishushenqi.com'+item.cover" alt="" class="weui-media-box__thumb"/>
		          </div> 
		          <div class="weui-media-box__bd">
		             <p class="y_b_title">{{item.title}}</p>
		             <p class="y_b_shortIntro">{{item.author}}</p>
		            <p class="y_b_shortIntro">{{item.desc.substring(0,16)+'...'}}</p>

		            <div style="padding-top:5px;">
		              <p style="float:left;"><span>共{{item.bookCount}}本书</span>|<b style="color:#f00;">{{item.collectorCount}}</b>人收藏</p>
		            </div>
		          </div>
		         </router-link>
		        </a> 
		      </div> 
		    </div>
				  `,
	        created(){
	            var url2 = "/book-list?sort=collectorCount&duration=last-seven-days&start=0"
	            Vue.axios.get(url2).then((res)=> {
	              return  res.data.bookLists
	              }).then((data) =>{
	               
	                this.list2 =Array.prototype.slice.call(data)
	               

	              })
	          },
	        data () {
	            return {
	               list2:''
	            }
	          },
	       }
			    
		},
	  data () {
	    return {
	     showContent004: false,
	     arr:'',
   		 brr:'',
   		 crr:'',
   		 drr:''
   		 }
	  },
created(){
	  	var url = "/book-list/tagType"
	  	 
	    Vue.axios.get(url).then((res)=> {
	        return res.data.data
	        
		      }).then((data)=> {
		      	
		        this.arr =  data[0].tags
		        
		        
		   })
		      Vue.axios.get(url).then((res)=> {
	        return res.data.data
	        
		      }).then((data)=> {
		      	
		        this.brr =  data[1].tags
		        
		        
		   })
		      Vue.axios.get(url).then((res)=> {
	        return res.data.data
	        
		      }).then((data)=> {
		      	
		        this.crr =  data[2].tags
		        
		        
		   })
		      Vue.axios.get(url).then((res)=> {
	        return res.data.data
	       
		      }).then((data)=> {
		      	
		        this.drr =  data[3].tags
		        
		        
		   })

	  },

	  methods:{
		  	hotsc:function(){
		  		

		  		return list2.collectorCount.filter(function(list2){
		  			return list2.gender==male;
		  		})
		  	}
		  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "less">
	.list .weui-panel{
		background: #f8f8f8;
	}
	.list{
		top: 0;
		position: fixed;
		height:100vh ;
		width: 100vw;
		background: #fff
	}
	.list .vux-header{
		background: #b93321;
		height: 1.17333rem;
	}
	.list .vux-header .vux-header-right a{
		display: block;
		height: 1.17333rem;
		line-height:  1.17333rem;
		width: 0.4rem;
		background: url(../assets/home.png) no-repeat center;
		background-size: 125% 50%;
		margin-top: -0.4rem;
	}
	.list .vux-header .vux-header-left{
	    width: 1.6rem;
	    text-align: center;
	    top: 10px;
	    font-size: 14px;

	}
	.list .vux-header .vux-header-left a{
		font-size: 12px;
		color: white;
	}
	.list .vux-header .vux-header-title, .vux-header h1 {
		font-weight: bold;
		line-height: 33px;
		font-size: 14px	;
	}
	.list .vux-header .vux-header-left .vux-header-back{
		color: #fff;
	}
	.list .vux-header .vux-header-left .left-arrow:before {
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
	.list .vux-tab .vux-tab-item.vux-tab-selected{
		border-bottom: none;
		color: #b93321;
	}
	.list .vux-tab .vux-tab-item{
		border: none;
		color: #666;
		background: none;
		height: 100%;
		font-size: 13px;
		line-height: 1.2rem;
	}
	.topchose{
		width: 65vw;
		height: 1.2rem;
	}
	.topchose .vux-tab{
		height: 1.2rem;
	}
	.topchose1{
		position: relative;
	}
	.topchose1 .vux-tab{
		height: 1.2rem;
		font-size: 13px;
		width: 83vw;

	}
	.list .sub-item {
	  color: #888;
	}
	.list .slide {
	  padding: 0 10px;
	  
	  max-height: 0;
	  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
	}
	.list .animate {
	  max-height: 9999px;
	  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
	  transition-delay: 0s;
	}
	

	.topchose1 .weui-cell{
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
	.topchose1 .weui-cell__ft{
		display: block;
	}
	.topchose1 .weui-cell_access .weui-cell__ft{
		position: absolute;
		top: .655rem;
		right: .7rem;
	}
	.topchose1 .flex-demo {
	  text-align: center;
	  color: #fff;
	  background-color: #20b907;
	  border-radius: 4px;
	  background-clip: padding-box;
	}
	.topchose1 .weui-cell:before{
		border: none;
	}
	.list .slide{
		overflow: auto;
		background:#f8f8f8;
		height: 80vh;
	}
	.list .vux-divider{
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
	.list .topchose1 .flex-demo{
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
	.list .vux-flexbox .vux-flexbox-item{
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
	.list .vux-flexbox .vux-flexbox-item:first-child{
		margin-top: 0.2rem!important;

	}
	.list .vux-label{
		margin-top: 0.35rem;
	}
	.list .weui-panel{
		height: 80vh;
		overflow: auto
	}
	.xunhuan{
		display: block
	}
	.list .topchose1.slide{
		overflow: auto
	}
</style>
