<template>
	<div class="y_list">
	 <x-header style="color:white">主题书单<a slot="right"></a></x-header>
     <div class="y_box1">
     	<book-cont></book-cont>
     	<book-comment></book-comment>
     	<tui-jian></tui-jian>
     </div>
     </div>
    </group>
	</div>
</template>

<script>
	import { XHeader, Actionsheet, TransferDom,Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem,Cell, CellBox, CellFormPreview, Group, Badge,Search,Panel,Radio,Grid,GridItem,ButtonTabItem,Masker, ButtonTab,Flexbox,FlexboxItem,Rater   } from 'vux'
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
	    Panel ,
	    "bookCont":{
	    	components:{		
			    Flexbox,
			    FlexboxItem,
			    Panel ,
	    		XButton,
	    	},
	    	template:`<div><a class="weui-media-box weui-media-box_appmsg">
				          <div class="weui-media-box__hd">
				            <img :src="'http://statics.zhuishushenqi.com'+cont.cover" alt="" class="weui-media-box__thumb">
				          </div> 
				          <div class="weui-media-box__bd y_cont">
				          	<p style="font-size:0.6rem;color:#333;">{{cont.title.substring(0,9)+"..."}}</p>
				            <p><span style="color:red;">{{cont.author}}</span> | <span>{{cont.cat}}</span> | <span>{{parseInt(cont.wordCount/10000)}}万字</span></p>
				            <p>{{cont.updated}}天前更新</p>
				            <p style="height:0.6rem;width:3rem;vertical-align:middle;border:1px solid #ccc;border-radius:2px;"><i style="float:left;"><img style="height:0.5rem;background:#ccc;padding:0.05rem;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE3UlEQVR4Xu2bgbEOMRDHdytABagAFaACVIAKUAEqQAW8ClABKkAFqAAVrPmxZ/IyubvN3eYbb3yZ+cbDvVz2l/9udpN8Kv950//cfjkCOCpgEAEzuyoiV0TkkoicFxH+PrX3/sNXEfmqqh8GDWO12zQXMDOMvCUit/2z+vLqAaC8EZG3qgqYg7TdAMzshojcFZF7iSMGxAtVnZSS2PXprjYDcMMfiwgARjUAPB0JohuASx3DHy5Y/U1EGPwn//xQVX7+3bwPYgLxgT+BSLyYa69E5JGq/sgm3QXAA9trH3g9lp8iwkBflcZGB2xmwMCN+Fxs/B7G38lWQxiAmTGwl42BYfgTVX0eNXbtOX/XkxkQ91UV0CktBGDBeGR9c4Q03VWAgLvVDZXdzyAQBYA/X595IdJk9k9GLF/udqwKtVukQIgCmJuJkgkgcIUXGTNT9uFBk0moA+VudwgBcDkSrUly+JNPK1DxKG7BwP5G/SwgZobvk3OUDRfcnC+EAdRGeB5AYKwHxKOogYGNgECfpRJ41+WtcWgzgAmIy5OZIQ2u226JNsCTctfu8EZV72xR2m4ABQjcAxDnioEMUYIHRiCU79rkCmkAijhRDwwI17JXCDOrAzNV5eVeFaQCcAgtib5X1Zu9g1t73syoGstg3O1y6QAWlNA9uACAOjvtBj0EgEOoB7crWs/BaKiAFSG8nzAMgEOoM0gqurSawd9BVfqsAMQ+wlKleorlaACUue+KN24KVEuu4FXkl+KZT6p6bc19pv8fCmBGBZS05PZpzczq5OhCNDE6BIA6FnRJNELJzHCrB8Wz4ZzgEABYFr9vlWgQAEkYGzVTYxuNPGG1DQfgbnBKoqqa+l7PDD8W1lKahzZpUweysFRtlujqFPoDZmbFsx9UNbRZeygAddoa9tEjgCCBowKOLvBvx4ChQbCRDXK+yNK42g4VBOuaIJyprVrw56SpTrn/nTzAt8zKROizqpZH5REbF59pbI6E0+3hCjCzOksbkQrXCguXxIcAQOFTbpiGZycijYbCvqkq54yhNhRAIzh1DS5iQePYLpwG0/9oABQoZTQOB6eI8V5nsN9Qpr1dChsGoOH7nCJfitbpEQCN6N+tsCEA3C/ZpaEUntohZr/7HekA3HhkWS51I5a+enXZpLBUADPGM7AbmeeEmQpLA+D+yA2SegnqCkpB368DX7fvT+/ZDWDl0tSIwxAg17s9m/cXNgPwbSg2IltbT8j+YeZdHl/y6jMA/rk78JUqCwOoboKy7pYRvuzzM1Ayfd6Nb818eOtrzrV6ANR+1+pz12y0OnTwGF+Xt4AmuO66O9gDoNx0LMeK3Kn3ubQUPpMLBjuU1gqsKcZ3pcKNw4fJBoodzvzSjPcagvO+1qZGmvFdANwPl26LcTuEqypvI7M7I/fptvncnn56KR12gWnAvt5j7NwtMXwSVVCjkwHOXpQqvlOA1PnMlbG4GYE19UyxWwEFBFYAlqTWLc45AZRX2TA0WrNz75D7h7uC3e5VYEayGIFb4KvlhaWtXlD+3okbnhZbWoPqdoGFpQq/Rcat63JRIAQ4VhRiyZAZrweSAqDs1NdtQEzfA8BdWt8FwFiMnL5XwP2egxi9KROMTuFZey5dAUcAZ4zAUQFnbMLSh3tUQDrSM9bhL1Q0G1+DA688AAAAAElFTkSuQmCC" alt=""></i><span style="float:left;padding-left:2px;color:#ccc;">不支持包月</span></p>
				          </div>
				        </a>
				        <div class="y_btn">
     	<flexbox>
	      <flexbox-item><x-button style="background:#fff;color:#b93321;border: 1px solid #b93321;" type="warn">+追更新</x-button></flexbox-item>
	      <flexbox-item><router-link :to="{ name: 'page', params: { id: cont._id }}" style="text-decorition:none;color:#fff;"><x-button type="warn">开始阅读</x-button></router-link></flexbox-item>
	    </flexbox>
     </div>
     <div data-v-d2d0faca="" class="weui-grids">
     	<a data-v-d2d0faca="" href="javascript:;" class="weui-grid" style="width: 33.33%;line-height:0.7rem;">
     		<p class="weui-grid__label">
     			<span>追人气</span>
     		</p> 
     		<p class="weui-grid__label">
     			<span>{{cont.latelyFollower}}</span>
     		</p> 
     	</a>
     	<a data-v-d2d0faca="" href="javascript:;" class="weui-grid" style="width: 33.33%;line-height:0.7rem;">
     		<p class="weui-grid__label">
     			<span>读者留存率</span>
     		</p>
     		<p class="weui-grid__label">
     			<span>暂无统计</span>
     		</p> 
     	</a>
     	<a data-v-d2d0faca="" href="javascript:;" class="weui-grid" style="width: 33.33%;line-height:0.7rem;">
     		<p class="weui-grid__label">
     			<span>日更字数</span>
     		</p> 
     		<p class="weui-grid__label">
     			<span>{{cont.serializeWordCount}}</span>
     		</p> 
     	</a>
     	</div>
     	</div> `,
		        data () {
							return {
								cont:''
							}
		        },
		        created () {
		        	var arr = location.href.split("/");
		        	var str = arr[arr.length - 1];
		        	
		        	var url = "/book/"+str;
				    Vue.axios.get(url).then((res)=> {
				        	return res.data
					   }).then((data)=> {
					   		var time = new Date();
					   		data.updated = parseInt((time - new Date(data.updated))/86400000);
					   		this.cont = data;
			 
					   })
		        }
	    	},
	    	"bookComment":{
	    	components:{		
			    Flexbox,
			    FlexboxItem,
			    Panel ,
	    		XButton,
	    		Rater ,
	    	},
	    	template:`<div class="y_shuping">
	    			<a class="weui-media-box weui-media-box_appmsg y_li" v-for="item in list">
				          <div class="weui-media-box__hd">
				            <img class="y_photo" :src="'http://statics.zhuishushenqi.com'+item.author.avatar" alt="" class="weui-media-box__thumb">
				          </div>
				          <div class="weui-media-box__bd" style="overflow:hidden;">
				          	<p>{{item.author.nickname}}</p>
				          	<h6>{{item.title.length>18?item.title.substring(0,18)+"...":item.title}}</h6>
				          	<p><rater v-model="item.rating" slot="value" disabled font-size="8" margin="5"></rater></p>
				          	<p>{{item.content.length>37?item.content.substring(0,36)+"...":item.content}}</p>
				          	<p><i><img src="data:image/png;base64,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" style="height:10px;width:10px;" /></i>{{item.likeCount}}</p>
				          </div>
				        </a>
     			</div> `,
		        data () {
						return {
							list:''
						}
		        },
		        created () {
		        	var arr = location.href.split("/");
		        	var str = arr[arr.length - 1];
		        
		        	var url = "/review/best-by-book?book="+str+"&limit=10"
				    Vue.axios.get(url).then((res)=> {
				        	return res.data.reviews
					   }).then((data)=> {
			 				this.list = data;
					   })
		        }
	    	},
		    "tuiJian":{
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
						      <div class="weui-panel__hd">你可能感兴趣</div> 
						      <div class="weui-panel__bd">
						        <grid :rows="4">
						          <grid-item v-for=" item in list" class="y_grid" style="text-decoration: none;font-size:12px;line-height:18px;">
						              <a href="javascript:;" style="text-decoration:none;color:#333;">
						                <img :src="'http://statics.zhuishushenqi.com'+item.cover" alt="欢乐颂" style="height:100px;">
						                <p>{{item.title.substring(0,3)+'...'}}</p>
						              </a>
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
				    var url = "/book/553ca8749b037b117d635c23/recommend"
				    Vue.axios.get(url).then((res)=> {

				      return  res.data
				      }).then((data)=> {
				       	this.list = data.books
				      })
				  },
				data () {
				    return {
				      list:""
				    }
				  }
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
	  	
	  }
}
//http://api.zhuishushenqi.com/book/553ca8749b037b117d635c23
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "less">
	.y_list{
		top: 0;
		position: fixed;
		height:100vh ;
		width: 100vw;
		background: #fff;
		font-size:12px;
		color:#3e3e3e;
	}
	.y_box1{
		height: 95vh;
		overflow-x: hidden;
	}
	.y_cont{
		color:#999;
	}
	.y_btn{
		margin: 0 15px;
		border-bottom: 1px solid #ebebeb;
		padding-bottom: 15px;
	}
	.weui-btn_warn{
		background: #b93321;
		border: 1px solid #b93321; 
	}
	.weui-grids:after{
		border:0;
	}
	.y_shuping{
		border-top: 1px solid #ebebeb;
	}
	.y_shuping .weui-media-box_appmsg .weui-media-box__hd{
		width: 30px;
	}
	.y_shuping .weui-media-box_appmsg .weui-media-box__hd img{
		border-radius: 4px;
	}
	.y_li{
		border-bottom:1px solid #ebebeb;
	}
</style>
