<template>
	<div class="y_list">
	 <x-header style="color:white">第{{page+1}}章<a slot="right"></a></x-header>
     <div class="y_box1">
     	<book-cont @sendData='getData'></book-cont>
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
	    	template:`<div class="readcont">
	    				<div class="shini">{{cont.cpContent}}</div>
	    				<flexbox>
					      <flexbox-item><div class="flex-demo" @click='pageSub'>上一章</div></flexbox-item>
					      <flexbox-item><div class="flex-demo">+追更新</div></flexbox-item>
					      <flexbox-item><div class="flex-demo">目录</div></flexbox-item>
					      <flexbox-item><div class="flex-demo" @click='pageAdd'>下一章</div></flexbox-item>
					    </flexbox>
     			</div> `,
     			methods:{
     				pageAdd:function(){
     					this.num = this.num + 1;
<<<<<<< HEAD
     					console.log(this.num);
     					this.$emit("sendData",this.num);
=======
     				
>>>>>>> 328bb9734843ce2fbecf082b4d1c1b73d535560d
     					var str2 = this.bookList[this.num].link.replace("http://vip.zhuishushenqi.com","");
				   		
				   		this.url3 = "/chapter/http%3A%2F%2Fvip.zhuishushenqi.com"+str2;
				   		Vue.axios.get(this.url3).then((res)=> {
				        return res.data.chapter
					   }).then((data)=> {
					   		
					   		this.cont = data;
					   		var oDiv = document.getElementsByClassName("y_box1")[0];
						   	
						   	oDiv.scrollTop = 0;
						   	
					   })
     				},
     				pageSub:function(){
     					if(this.num == 0){
     						alert("已经是第1章啦！")
     					}else{
     						this.num = this.num - 1;
     						this.$emit("sendData",this.num);
     						var str2 = this.bookList[this.num].link.replace("http://vip.zhuishushenqi.com","");
					   		
					   		this.url3 = "/chapter/http%3A%2F%2Fvip.zhuishushenqi.com"+str2;
					   		Vue.axios.get(this.url3).then((res)=> {
					        return res.data.chapter
						   }).then((data)=> {
						   	
						   		this.cont = data;
						   		var oDiv = document.getElementsByClassName("y_box1")[0];
						   		oDiv.scrollTop = 0;
						   })
     					}
     					
     				}
     			},
		        data () {
							return {
								cont:'',
								num:0,
								url:'',
								url2:'',
								url3:'',
								bookList:''
							}
		        },
		        created () {
		        	var arr = location.href.split("/");
		        	var str = arr[arr.length - 1];
		        
		        	this.url = "/btoc?view=summary&book="+str;
				    Vue.axios.get(this.url).then((res)=> {
				    	
				        return res.data
					   }).then((data)=> {
					   		this.url2 = "/btoc/"+data[0]._id+"?view=chapters&channel=mweb"
					   		Vue.axios.get(this.url2).then((res)=> {
						    	
						        return res.data
							   }).then((data)=> {
							   		this.bookList = data.chapters;
<<<<<<< HEAD
							   		var str2 = this.bookList[this.num].link.replace("http://vip.zhuishushenqi.com","");
							   		console.log(str2);
=======
							   		var str2 = this.bookList[0].link.replace("http://vip.zhuishushenqi.com","");
							   		
>>>>>>> 328bb9734843ce2fbecf082b4d1c1b73d535560d
							   		this.url3 = "/chapter/http%3A%2F%2Fvip.zhuishushenqi.com"+str2;
							   		Vue.axios.get(this.url3).then((res)=> {
							        return res.data.chapter
								   }).then((data)=> {
								   		
								   		this.cont = data
								   })
							   })
					   })
		        }
	    	}
		},
	  data () {
	    return {
	     showContent004: false,
   		 arr:'',
   		 brr:'',
   		 crr:'',
   		 drr:'',
   		 page:0
   		}
	  },
	  created(){
	  	
	  },
	    methods:{
	    	getData(data){
	    		this.page = data;
	    	}
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
	.readcont{
		background: #eee6dd;
		padding:0.2rem 0.5rem;
		font-size: 18px;
		line-height: 1.5;
		padding-bottom: 20px;
		text-align: justify;
	}
</style>
