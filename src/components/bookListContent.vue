<template>
	<div class="list4">
	 <x-header style="color:white">书单详情 <a slot="right" href="/"></a></x-header>
		
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
		        <div class="bookList-header">
			        <div class="bookList-header-top">
			        	<img :src="'http://statics.zhuishushenqi.com'+list2.author.avatar" alt="" />
			        		<div class="bookList-header-top-right">
			        			<div class="nickName">{{list2.author.nickname}} lv.{{list2.author.lv}}</div>
			        			<div class="lastTime">
			        				{{parseInt((new Date() - new Date(list2.created))/86400000)}}天前
			        			</div>
			        		</div>
			        </div>
		        	<div class="bookList-header-describe">
		        		<h3>{{list2.title}}</h3>
		        		<div class="describe-container">
		        			{{list2.desc}}
		        		</div>
		        	</div>
		        	<div class="bookList-header-bottom">
		        		<img :src="'http://statics.zhuishushenqi.com'+list2.author.avatar" alt="" />
		        		<div class="bookList-header-bottom-right">
		        			<span class="from">创建自</span>
		        			<span class="nickName">{{list2.author.nickname}}</span>
		        		</div>
		        	</div>
		        </div>
				
				<div class="bookList-container">
					<ul>
						<li v-for="item in list2.books">
							<router-link :to="{name:'Info',params:{id:item.book._id}}">
								<div class="book-info">
									<div class="book-img">
										<img :src="'http://statics.zhuishushenqi.com'+item.book.cover" alt="">
									</div>
									<div class="book-info-right">
										<h3>{{item.book.title}}</h3>
										<div class="book-data">
											<span>{{item.book.author}}</span>
<<<<<<< HEAD
											<span>|</span>
											<span>{{item.book.majorCate}}</span>
											<span>|</span>
=======
											<span class="pad">|</span>
											<span>{{item.book.majorCate}}</span>
											<span class="pad">|</span>
>>>>>>> 328bb9734843ce2fbecf082b4d1c1b73d535560d
											<span style="color:#b93321">{{item.book.latelyFollower}}</span>
											<span>人气</span>
										</div>
									</div>
								</div>
							</router-link>
						</li>
					</ul>
				</div>

		      </div> 
		    </div>`,
	        created(){
	        	var adress = location.href.split("/")
	        	var l = adress.length-1;
	        	var str = adress[l];
	 			

	        	
	            var url2 ='/book-list/'+str
	            Vue.axios.get(url2).then((res)=> {
	            
	              return res.data.bookList
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
        	
	}
	 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "less">
	.list4 .weui-panel{
		background: #f5f2ed;
	}
	.list4{
		top: 0;
		position: fixed;
		height:100vh ;
		width: 100vw;
		background: #fff
	}
	.list4 .vux-header{
		background: #b93321;
		height: 1.17333rem;
	}
	.list4 .vux-header .vux-header-right a{
		display: block;
		height: 1.17333rem;
		line-height:  1.17333rem;
		width: 0.4rem;
		background: url(../assets/home.png) no-repeat center;
		background-size: 125% 50%;
		margin-top: -0.4rem;
	}
	.list4 .vux-header .vux-header-left{
	    width: 1.6rem;
	    text-align: center;
	    top: 10px;
	    font-size: 14px;

	}
	.list4 .vux-header .vux-header-left a{
		font-size: 12px;
		color: white;
	}
	.list4 .vux-header .vux-header-title, .vux-header h1 {
		font-weight: bold;
		line-height: 33px;
		font-size: 14px	;
	}
	.list4 .vux-header .vux-header-left .vux-header-back{
		color: #fff;
	}
	.list4 .vux-header .vux-header-left .left-arrow:before {
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
	.list4 .bookList-header{
		padding:.4rem 0 .3rem .4rem;
		background: white
	}
	.list4 .bookList-header-top{
		height: .93333rem;
		
	}
	.list4 .bookList-header-top img{
		float: left;
	    width: .93333rem;
	    height: .93333rem;
	    border-radius: 4px;
	    margin-right: .4rem;
	}
	.list4 .bookList-header-top .bookList-header-top-right{
		line-height: .46667rem;
		font-size: 12px;
	}
	.list4 .nickName{
		color: #ab946a;
	}
	.bookList-header-top .bookList-header-top-right .lastTime{
		color: #999;
    	font-size: .24rem;
	}
	.bookList-header-describe {
    	margin: .4rem 0;
    	font-size: 12px;
	}
	.bookList-header-describe h3{
		    margin-bottom: .4rem;
		    font-size: 12px;
	}
	.bookList-header-describe .describe-container {
    color: #999;
    line-height: .50667rem;
	}
	.list4 .bookList-header .bookList-header-bottom{
		height: .8rem;
	}
	.list4 .bookList-header .bookList-header-bottom img {
    float: left;
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    margin-right: .4rem;
	}
	.list4 .bookList-header-bottom .bookList-header-bottom-right {
    line-height: .3rem;
	}
	.list4 .bookList-header .bookList-header-bottom .bookList-header-bottom-right .from {
    color: #999;
    font-size:12px;
	}
	.list4 .bookList-header .bookList-header-bottom .bookList-header-bottom-right .nickName{
		 font-size: 12px
	}
	.list4 .weui-panel__bd{
		height: 90vh;
		overflow: auto;
	}
	li{
		list-style: none
	}
	.list4 .bookList-container ul>li>a:first-child {
   		 margin-top: .26667rem;
	}
	.list4 ul li{
		font-size: 12px;
		padding:.0 0 0 .4rem;
		background: white;
		margin-top: .25rem;
	}
	.list4 ul li a .book-info {
	    width: 100%;
	    display: inline-block;
	    margin: .4rem 0;
	}
	.list4 .book-info .book-img {
	    float: left;
	    width: 1.2rem;
	    height: 1.44rem;
	    border: 1px solid #ebebeb;
	    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAD+CAYAAABr7tTPAAAAAXNSR…KP8ruXVvPWMk1zVFr+Zlla/mZZWv5mWVr+Zlla/mZRPn3/f2/MVegy5jPFAAAAAElFTkSuQmCC) no-repeat;
	    background-position: 50%;
	    background-size: 100%;
	}
	.list4 .book-info .book-img .img{
		width: 100%;
		height: 100%;
	}
	.list4 .book-info .book-info-right {
	    float: left;
	    margin-left: .46667rem;
	    line-height: .72rem;
	}
	.list4 .book-info .book-info-right h3 {
    	color: #222;
    	font-size: 12px;
	}
	.list4 .book-info .book-info-right .book-data {
    	color: #999;
	}
	.list4 .book-info .book-info-right .book-data span{
		font-size: 12px
	}
	.list4 .pad{
		padding: 0.15rem;
	}
</style>
