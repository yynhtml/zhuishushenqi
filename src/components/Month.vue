<template>
	<div class="y_box">
		<my-swipe></my-swipe>
		<div class="weui-panel weui-panel_access">
			<div class="weui-media-box y_login">
				<flexbox>
			      <flexbox-item>
				      <img src="../assets/own2.png" alt="请先登录">
				      <h6>大侠先登录一个呗</h6>
			      </flexbox-item>
			      <flexbox-item :span="4"><router-link to='/login' style="color:#fff;text-decoration:none;"><x-button mini type="warn">立即登录</x-button></router-link></flexbox-item>
			    </flexbox>
			    <div class="weui-form-preview__ft">
			    	<a href="javascript:" class="weui-form-preview__btn weui-form-preview__btn_default"><i><img src="../assets/changdu.png" alt=""></i>畅读特权</a>
			    	<a href="javascript:" class="weui-form-preview__btn weui-form-preview__btn_primary"><i><img src="../assets/y_zhekou.png" alt="请先登录"></i>折扣特权</a>
			    </div>
			</div>
		</div>
		<week-hot></week-hot>
		<chang-xiao></chang-xiao>
		<new-book></new-book>
		<wan-jie></wan-jie>
		<da-shen></da-shen>
	</div>
</template>

<script>
	import Vue from 'vue'
	import jsonp from 'jsonp'
	import { Swiper, GroupTitle, SwiperItem, Divider, Search, Cell, Panel, Group, Radio, Grid, GridItem, Masker, ButtonTab, ButtonTabItem, Flexbox, FlexboxItem, XButton  } from 'vux'


	export default {
		components: {
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
		    XButton,
		    "mySwipe":{
		    	components:{
				    Swiper,
				    SwiperItem,
				    GroupTitle,
				    Divider
		    	},
		    	template:`<div><swiper height="3.2rem" :list="listLI" auto v-model="demo01_index" @on-index-change="demo01_onIndexChange" :loop='true'></swiper></div>`,
		    	methods:{
					 onSwiperItemIndexChange (index) {
					      
					    },
					    demo01_onIndexChange (index) {
					      this.demo01_index = index
					    }
				},
				created(){
				    var Url = "/recommendPage/node/spread/575f74f27a4a60dc78a435a4?pl=ios&gender=male"
				    Vue.axios.get(Url).then((res)=> {
				      return  res.data
				      }).then((data)=> {
				        return data.data
				      }).then((data) =>{
				        this.listL = data
				        this.listLI = Array.prototype.slice.call(data)
				      })
				  },
				data () {
				    return {
				      demo01_index: 0,
		      		  swiperItemIndex: 1,
				      listL: [],
				      listLI:[]
				    }
				  }
		    },
		    "weekHot":{
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
		    	template:`<div> <div class="weui-panel weui-panel_access">
						      <div class="weui-panel__hd">本周热推</div> 
						      <div class="weui-panel__bd">
						        <a v-for="item in list">
						        <router-link :to="{ name: 'Info', params: { id: item.book._id }}" class="weui-media-box weui-media-box_appmsg">
						          <div class="weui-media-box__hd">
						            <img :src="item.book.cover" alt="" class="weui-media-box__thumb">
						          </div> 
						          <div class="weui-media-box__bd">
						            <p class="y_b_title">{{item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;background:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
						            <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,32)+'...'}}</p>
						            <div style="padding-top:5px;">
						              <p style="float:left;font-size:12px;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p><span style="float:right;border:1px solid orange;color:orange;padding:5px;line-height:1;">{{item.book.majorCate}}</span>
						            </div>
						          </div>
						          </router-link>
						        </a> 
						      </div> 
						      <div class="weui-panel__ft">
						        <a href="http://vux.li" class="weui-cell weui-cell_access weui-cell_link">
						          <div class="weui-cell__bd">查看更多<b>></b></div>
						        </a>
						      </div>
						    </div>
						    </div>`,
				created(){
				    var url = "/recommendPage/books/578351b97fa1aac6396a3cd2"
				    Vue.axios.get(url).then((res)=> {
				      return  res.data
				      }).then((data)=> {
				        return data.data
				      }).then((data) =>{
				        this.list = Array.prototype.slice.call(data)
				      })
				  },
				data () {
				    return {
				      list:""
				    }
				  }
		    },
		    "changXiao":{
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
						      <div class="weui-panel__hd">精品畅销</div> 
						      <div class="weui-panel__bd">
						        <grid :rows="4">
						          <grid-item v-for=" item in list" class="y_grid" style="text-decoration: none;font-size:12px;line-height:18px;">
						          	<router-link :to="{ name: 'Info', params: { id: item._id }}" class="weui-media-box weui-media-box_appmsg">
						              <a href="javascript:;" style="text-decoration:none;color:#333;">
						                <img :src="item.book.cover" alt="欢乐颂" style="height:100px;">
						                <p>{{item.book.title.substring(0,3)+'...'}}</p>
						              </a>
						              </router-link>
						          </grid-item>
						        </grid>
						      </div> 
						      <div class="weui-panel__ft">
						        <a href="javascript:;" class="weui-cell weui-cell_access weui-cell_link">
						          <div class="weui-cell__bd">查看更多<b>></b></div>
						        </a>
						      </div>
						    </div>`,
				created(){
				    var url = "/recommendPage/books/578358f07fa1aac6396a3cd4"
				    Vue.axios.get(url).then((res)=> {
				      return  res.data
				      }).then((data)=> {
				        return data.data
				      }).then((data) =>{
				        this.list = Array.prototype.slice.call(data)
				      })
				  },
				data () {
				    return {
				      list:""
				    }
				  }
		    },
		    "newBook":{
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
		    	template:`<div> <div class="weui-panel weui-panel_access">
						      <div class="weui-panel__hd">火热新书</div> 
						      <div class="weui-panel__bd">
						        <a :href="item.url" v-for="(item,index) in list">
						        <router-link :to="{ name: 'Info', params: { id: item._id }}" class="weui-media-box weui-media-box_appmsg">
						        	<div v-if="index==0" class="weui-media-box_appmsg">
							          <div class="weui-media-box__hd">
							            <img :src="item.book.cover" alt="" class="weui-media-box__thumb">
							          </div> 
							          <div class="weui-media-box__bd">
							             <p class="y_b_title">{{item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;background:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
							            <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,32)+'...'}}</p>
							            <div style="padding-top:5px;">
							              <p style="float:left;font-size:12px;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p><span style="float:right;border:1px solid orange;color:orange;padding:5px;line-height:1;">{{item.book.majorCate}}</span>
							            </div>
							          </div>
						          </div>
						          <div v-else class="weui-media-box_appmsg">
							          <div class="weui-media-box__bd">
							            <p class="y_b_title"><span style="border:1px solid orange;color:orange;margin-right:2px;">{{item.book.majorCate}}</span>{{item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;backgrond:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
							            <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,22)+'...'}}</p>
							            <div style="padding-top:5px;">
							              <p style="float:left;font-size:12px;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p>
							            </div>
							          </div>
						          </div>
						          </router-link>
						        </a>
						      </div> 
						      <div class="weui-panel__ft">
						        <a href="http://vux.li" class="weui-cell weui-cell_access weui-cell_link">
						          <div class="weui-cell__bd">查看更多<b>></b></div>
						        </a>
						      </div>
						    </div>
						    </div>`,
				created(){
				    var url = "/recommendPage/books/57835919dac58e5b394ca065"
				    Vue.axios.get(url).then((res)=> {
				      return  res.data
				      }).then((data)=> {
				        return data.data
				      }).then((data) =>{
				        this.list = Array.prototype.slice.call(data)
				      })
				  },
				data () {
				    return {
				      list:""
				    }
				  }
		    },
		    "wanJie":{
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
		    	template:`<div> <div class="weui-panel weui-panel_access">
						      <div class="weui-panel__hd">完结力作</div> 
						      <div class="weui-panel__bd">
						        <a :href="item.url" v-for="(item,index) in list">
						        <router-link :to="{ name: 'Info', params: { id: item._id }}" class="weui-media-box weui-media-box_appmsg">
						        	<div v-if="index==0" class="weui-media-box_appmsg">
							          <div class="weui-media-box__hd">
							            <img :src="item.book.cover" alt="" class="weui-media-box__thumb">
							          </div> 
							          <div class="weui-media-box__bd">
							             <p class="y_b_title">{{item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;background:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
							            <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,32)+'...'}}</p>
							            <div style="padding-top:5px;">
							              <p style="float:left;font-size:12px;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p><span style="float:right;border:1px solid orange;color:orange;padding:5px;line-height:1;">{{item.book.majorCate}}</span>
							            </div>
							          </div>
						          </div>
						          <div v-else class="weui-media-box_appmsg">
							          <div class="weui-media-box__bd">
							            <p class="y_b_title"><span style="border:1px solid orange;color:orange;margin-right:2px;">{{item.book.majorCate}}</span>{{item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;background:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
							            <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,22)+'...'}}</p>
							            <div style="padding-top:5px;">
							              <p style="float:left;font-size:12px;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p>
							            </div>
							          </div>
						          </div>
						          </router-link>
						        </a>
						      </div> 
						      <div class="weui-panel__ft">
						        <a href="http://vux.li" class="weui-cell weui-cell_access weui-cell_link">
						          <div class="weui-cell__bd">查看更多<b>></b></div>
						        </a>
						      </div>
						    </div>
						    </div>`,
				created(){
				    var url = "/recommendPage/books/5783593abe9f970e3dc42711"
				    Vue.axios.get(url).then((res)=> {
				      return  res.data
				      }).then((data)=> {
				        return data.data
				      }).then((data) =>{
				        
				        this.list = Array.prototype.slice.call(data)
				      })
				  },
				data () {
				    return {
				      list:""
				    }
				  }
		    },
		    "daShen":{
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
		    	template:`<div> <div class="weui-panel weui-panel_access">
						      <div class="weui-panel__hd">大神专区</div> 
						      <div class="weui-panel__bd">
						        <a v-for="(item,index) in list">
						        <router-link :to="{ name: 'Info', params: { id: item._id }}" class="weui-media-box weui-media-box_appmsg">
						        	<div v-if="index==0" class="weui-media-box_appmsg">
							          <div class="weui-media-box__hd">
							            <img :src="item.book.cover" alt="" class="weui-media-box__thumb">
							          </div> 
							          <div class="weui-media-box__bd">
							             <p class="y_b_title">{{item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;background:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
							            <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,32)+'...'}}</p>
							            <div style="padding-top:5px;">
							              <p style="float:left;font-size:12px;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p><span style="float:right;border:1px solid orange;color:orange;padding:5px;line-height:1;">{{item.book.majorCate}}</span>
							            </div>
							          </div>
						          </div>
						          <div v-else class="weui-media-box_appmsg">
							          <div class="weui-media-box__bd">
							            <p class="y_b_title"><span style="border:1px solid orange;color:orange;margin-right:2px;">{{item.book.majorCate}}</span>{{item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;background:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
							            <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,22)+'...'}}</p>
							            <div style="padding-top:5px;">
							              <p style="float:left;font-size:12px;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p>
							            </div>
							          </div>
						          </div>
						          </router-link>
						        </a>
						      </div> 
						      <div class="weui-panel__ft">
						        <a href="http://vux.li" class="weui-cell weui-cell_access weui-cell_link">
						          <div class="weui-cell__bd">查看更多<b>></b></div>
						        </a>
						      </div>
						    </div>
						    </div>`,
				created(){
				    var url = "/recommendPage/books/5812efcfed9cd61e1efc8adb"
				    Vue.axios.get(url).then((res)=> {
				      return  res.data
				      }).then((data)=> {
				        return data.data
				      }).then((data) =>{
				       
				        this.list = Array.prototype.slice.call(data)
				      })
				  },
				data () {
				    return {
				      list:""
				    }
				  }
		    }
		  },
		created(){
		   
		  },
  		methods: {
  			 
  		  },
		data () {
		    return {}
		  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
*{padding: 0;margin: 0;}
.flex-demo {
  font-size: 14px;
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
  height: 1rem;
  line-height: 1rem;
}
.y_box{
  min-height:80vh;
  background: #f1f1f1;
}
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
#search_input_8l49y{
  display: block;
  z-index: 99999;
}

.weui-panel{
  margin: 0;
  margin-bottom: 10px;
}

.weui-search-bar__cancel-btn{
  font-size: 0.5rem;
  text-decoration: none;
  color: #c9b388;
}

.weui-media-box_appmsg .weui-media-box__hd{
  padding: 0;
  min-height: 84px;
}

.weui-cell_link{
  text-decoration: none;
  text-align: center;
  color: #b93321;
}
.weui-panel:after{
  border-bottom: 0;
}
.y_grid img{
  width: 100%;
}
.y_box .weui-grid.y_grid a{
  text-decoration: none;
  font-size: 0.4rem;
  color: #333;
}
.weui-grid:before{
  border: 0;
}
.weui-grid:after{
  border: 0;
}
.weui-panel__hd:after{
  border: 0;
}
.weui-cell:before{
  border: 0;
}
.weui-media-box:before{
  border: 0;
}
.y_b_title{
  font-size: 0.4rem;
}
.y_b_shortIntro{
  font-size: 12px;
  color: #999;
  line-height: 18px;
  text-align: justify;
}
.weui-media-box__bd{
  font-size: 0.4rem;
  line-height: 0.7rem;
}
.weui-grids:before{
  border: 0;
}
.y_login img{
 height:0.8rem;
 width:0.8rem;
 float:left;
}
.y_login h6{
 height:0.8rem;
 width:4.5rem;
 float:right;
 font-size:12px;
 line-height:0.8rem;
}
y_login .weui-btn_mini{
	display:block;
}
.weui-form-preview__ft .weui-form-preview__btn{
	text-decoration:none;
	color:#333;
	font-size:14px;
	border:0;
}
.weui-form-preview__btn:after{
	border:0;
}
.weui-form-preview__ft:after{
	border:0;
}
.y_login{
	padding-bottom:0px;
}
.weui-form-preview__ft i{
	display:inline-block;
	vertical-align:-8px;
	margin-right:3px;
}
.weui-form-preview__ft{
	text-align:center;
	vertical-align:middle;
}
</style>
