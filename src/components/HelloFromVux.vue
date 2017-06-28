<template>
  <div class="y_box">
    <my-swipe></my-swipe>
    <div class="weui-search-bar weui-search-bar_focusing" > 
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input v-on:focus="onFocus" v-on:blur="onCancel" v-model="value" type="search" id="search_input_8l49y" class="weui-search-bar__input">
          <a href="javascript:" class="weui-icon-clear"></a>
        </div>
      </form>
      <a href="javascript:" class="weui-search-bar__cancel-btn">取消</a>
    </div>
   <girl-like></girl-like>
   <boy-like></boy-like>
   <movie-book></movie-book>
   <gril-free></gril-free>
   <boy-free></boy-free>
    <div style="margin: 10px; overflow: hidden;">
      <img src="http://statics.zhuishushenqi.com/recommendPage/149723490337860" alt="展示" style="width:100%;">
    </div>
    <gril-complete></gril-complete>
    <boy-complete></boy-complete>
    <gril-red></gril-red>
    <boy-red></boy-red>
    <hot-top></hot-top>
    <div class="fixed">
      <div class="page-homeFooter-wraper">
        <div class="homeFooter-top">
          <div class="search">
            <div class="search-icon"></div>
            <input type="text" name="">
            <div class="search-btn">
              <button>搜索</button>
            </div>
          </div>
          <div class="category">
            <router-link to="/"><span>首页</span></router-link>
            <router-link to="/classify"><span>分类</span></router-link>
            <router-link to="/ranking"><span>排行</span></router-link>
            <router-link to="/bookList"><span>书单</span></router-link>
            <router-link to="/personal">我的</span></router-link>
          </div>
          <div class="co-info">ICP备：浙ICP备11045712号    Copyright © 2013 All rights reserved.</div>
        </div>
        <div class="c-bottom-app-download clearfix">
          <div class="app-icon"></div>
          <div class="app-desc"><p>追书神器服务号</p><p>微信看书更方便，天天签到免费看</p>
          </div><a class="app-link" href="/signin">立即关注</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
import { Swiper, GroupTitle, SwiperItem, Divider, Search, Cell, Panel, Group, Radio, Grid, GridItem, Masker, ButtonTab, ButtonTabItem, Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    Divider,
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
            var Url = "/recommendPage/node/spread/575f74f27a4a60dc78a435a3?pl=ios"
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
      "girlLike":{
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
            <div class="weui-panel__hd">女生最爱</div> 
            <div class="weui-panel__bd">
              <a v-for="item in list">
                <router-link :to="{ name: 'Info', params: { id: item.book._id }}" class="weui-media-box weui-media-box_appmsg">
                  <div class="weui-media-box__hd">
                    <img :src="item.book.cover" alt="" class="weui-media-box__thumb" @click="change">
                  </div> 
                  <div class="weui-media-box__bd">
                    <p class="y_b_title">{{item.book.title.length>9?item.book.title.substring(0,9)+'...':item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;background:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
                    <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,32)+'...'}}</p>
                    <div style="padding-top:5px;">
                      <p style="float:left;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p><span style="float:right;border:1px solid orange;color:orange;padding:5px;line-height:1;">{{item.book.majorCate}}</span>
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
          </div>`,
          methods:{
            change:function(){
              this.Info = {name:'Info',params:{id:'123'}}
              
            }
          },
        created(){
            var url = "/recommendPage/books/5912825ba1dbf3ad33ee7ffe"
            Vue.axios.get(url).then((res)=> {
              return  res.data
              }).then((data)=> {
                return data.data
              }).then((data) =>{
               
                this.list = data
              })
          },
        data () {
            return {
              list: '',
              Info: ''
            }
          }
        },
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
      <div class="weui-panel__hd">男生热门</div> 
      <div class="weui-panel__bd">
        <a v-for="item in list2">
          <router-link :to="{ name: 'Info', params: { id: item.book._id }}" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img :src="item.book.cover" alt="" class="weui-media-box__thumb">
          </div> 
          <div class="weui-media-box__bd">
             <p class="y_b_title">{{item.book.title.length>9?item.book.title.substring(0,9)+'...':item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;background:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
            <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,32)+'...'}}</p>
            <div style="padding-top:5px;">
              <p style="float:left;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p><span style="float:right;border:1px solid orange;color:orange;padding:5px;line-height:1;">{{item.book.majorCate}}</span>
            </div>
          </div>
          </router-link>
        </a> 
      </div> 
      <div class="weui-panel__ft">
        <a href="javascript:;" class="weui-cell weui-cell_access weui-cell_link">
          <div class="weui-cell__bd">查看更多<b>></b></div>
        </a>
      </div>
    </div>`,
        created(){
            var url2 = "/recommendPage/books/59128334694d1cda365b8985"
            Vue.axios.get(url2).then((res)=> {
              return  res.data
              }).then((data)=> {
                return data.data
              }).then((data) =>{
                
                this.list2 = data
              })
          },
        data () {
            return {
               list2: ''
            }
          }
        },
      "movieBook":{
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
      <div class="weui-panel__hd">影视小说</div> 
      <div class="weui-panel__bd">
        <grid :rows="4">
          <grid-item v-for=" item in list3" class="y_grid" style="text-decoration: none;font-size:12px;line-height:18px;">
              <a href="javascript:;">
                <router-link :to="{ name: 'Info', params: { id: item.book._id }}">
                  <img :src="item.book.cover" alt="欢乐颂" style="height:100px;">
                  <p>{{item.book.title.substring(0,3)+'...'}}</p>
                </router-link>
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
            var url3 = "/recommendPage/books/59128365e5a3262c37488e3d"
            Vue.axios.get(url3).then((res)=> {
            return  res.data
            }).then((data)=> {
              return data.data
            }).then((data) =>{
            
              this.list3 = data
            })
          },
        data () {
            return {
              list3: ''
            }
          }
        },
      "grilFree":{
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
      <div class="weui-panel__hd">女生限免</div> 
      <div class="weui-panel__bd">
        <grid :rows="4">
          <grid-item v-for=" item in list4" class="y_grid" style="text-decoration: none;font-size:12px;line-height:18px;">
              <a href="javascript:;">
                <router-link :to="{ name: 'Info', params: { id: item.book._id }}">
                  <img :src="item.book.cover" alt="欢乐颂" style="height:100px;">
                  <p>{{item.book.title.substring(0,3)+'...'}}</p>
                </router-link>
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
            var url4 = "/recommendPage/books/5912a9d08973b2fe33614642"
            Vue.axios.get(url4).then((res)=> {
            return  res.data
            }).then((data)=> {
              return data.data
            }).then((data) =>{
            
              this.list4 = data
            })
          },
        data () {
            return {
              list4: ''
            }
          }
        },
      "boyFree":{
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
      <div class="weui-panel__hd">男生限免</div> 
      <div class="weui-panel__bd">
        <grid :rows="4">
          <grid-item v-for=" item in list5" class="y_grid" style="text-decoration: none;font-size:12px;line-height:18px;">
              <a href="javascript:;">
                <router-link :to="{ name: 'Info', params: { id: item.book._id }}">
                  <img :src="item.book.cover" alt="欢乐颂" style="height:100px;">
                  <p>{{item.book.title.substring(0,3)+'...'}}</p>
                </router-link>
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
            var url5 = "/recommendPage/books/5912aa17e647570434175d34"
            Vue.axios.get(url5).then((res)=> {
            return  res.data
            }).then((data)=> {
              return data.data
            }).then((data) =>{
             
              this.list5 = data
            })
          },
        data () {

            return {
              list5: ''
            }
          }
        },
      "grilComplete":{
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
          template:`
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">女生完结</div> 
      <div class="weui-panel__bd">
        <flexbox style="width:80vw;margin:0 auto;">
          <flexbox-item><div class="flex-demo">现言</div></flexbox-item>
          <flexbox-item><div class="flex-demo">女尊</div></flexbox-item>
          <flexbox-item><div class="flex-demo">古言</div></flexbox-item>
          <flexbox-item><div class="flex-demo">校园</div></flexbox-item>
        </flexbox>
        <a v-for="item in list6">
          <router-link :to="{ name: 'Info', params: { id: item.book._id }}" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <img :src="item.book.cover" alt="" class="weui-media-box__thumb">
            </div> 
            <div class="weui-media-box__bd">
               <p class="y_b_title">{{item.book.title.length>9?item.book.title.substring(0,9)+'...':item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;background:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
              <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,32)+'...'}}</p>
              <div style="padding-top:5px;">
                <p style="float:left;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p><span style="float:right;border:1px solid orange;color:orange;padding:5px;line-height:1;">{{item.book.majorCate}}</span>
              </div>
            </div>
          </router-link>
        </a> 
      </div> 
      <div class="weui-panel__ft">
        <a href="javascript:;" class="weui-cell weui-cell_access weui-cell_link">
          <div class="weui-cell__bd">查看更多<b>></b></div>
        </a>
      </div>
    </div>`,
        created(){
            var url6 = "/recommendPage/books/591283afa1dbf3ad33ee7fff"
            Vue.axios.get(url6).then((res)=> {
            return  res.data
            }).then((data)=> {
              return data.data
            }).then((data) =>{
             
              this.list6 = data
            })
          },
        data () {
            return {
              list6: ''
            }
          }
        },
      "boyComplete":{
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
      <div class="weui-panel__hd">男生完本</div> 
      <div class="weui-panel__bd">
        <flexbox style="width:80vw;margin:0 auto;">
          <flexbox-item><div class="flex-demo">现言</div></flexbox-item>
          <flexbox-item><div class="flex-demo">女尊</div></flexbox-item>
          <flexbox-item><div class="flex-demo">古言</div></flexbox-item>
          <flexbox-item><div class="flex-demo">校园</div></flexbox-item>
        </flexbox>
        <a v-for="item in list7">
          <router-link :to="{ name: 'Info', params: { id: item.book._id }}" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img :src="item.book.cover" alt="" class="weui-media-box__thumb">
          </div> 
          <div class="weui-media-box__bd">
             <p class="y_b_title">{{item.book.title.length>9?item.book.title.substring(0,9)+'...':item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;background:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
            <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,32)+'...'}}</p>
            <div style="padding-top:5px;">
              <p style="float:left;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p><span style="float:right;border:1px solid orange;color:orange;padding:5px;line-height:1;">{{item.book.majorCate}}</span>
            </div>
          </div>
          </router-link>
        </a> 
      </div> 
      <div class="weui-panel__ft">
        <a href="javascript:;" class="weui-cell weui-cell_access weui-cell_link">
          <div class="weui-cell__bd">查看更多<b>></b></div>
        </a>
      </div>
    </div>`,
        created(){
            var url7 = "/recommendPage/books/591283eb8973b2fe3361463d"
            Vue.axios.get(url7).then((res)=> {
            return  res.data
            }).then((data)=> {
              return data.data
            }).then((data) =>{
             
              this.list7 = data
            })
          },
        data () {
            return {
              list7: ''
            }
          }
        },
      "grilRed":{
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
      <div class="weui-panel__hd">女生红文区</div> 
      <div class="weui-panel__bd">
        <a v-for="item in list8">
        <router-link :to="{ name: 'Info', params: { id: item.book._id }}" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img :src="item.book.cover" alt="" class="weui-media-box__thumb">
          </div> 
          <div class="weui-media-box__bd">
             <p class="y_b_title">{{item.book.title.length>9?item.book.title.substring(0,9)+'...':item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;background:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
            <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,32)+'...'}}</p>
            <div style="padding-top:5px;">
              <p style="float:left;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p><span style="float:right;border:1px solid orange;color:orange;padding:5px;line-height:1;">{{item.book.majorCate}}</span>
            </div>
          </div>
          </router-link>
        </a> 
      </div> 
      <div class="weui-panel__ft">
        <a href="javascript:;" class="weui-cell weui-cell_access weui-cell_link">
          <div class="weui-cell__bd">查看更多<b>></b></div>
        </a>
      </div>
    </div>`,
        created(){
            var url8 = "/recommendPage/books/5912872f8973b2fe3361463f"
            Vue.axios.get(url8).then((res)=> {
            return  res.data
            }).then((data)=> {
              return data.data
            }).then((data) =>{
              
              this.list8 = data
            })

          },
        data () {
            return {
              list8: ''
            }
          }
        },
        
      "boyRed":{
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
          template:` <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">男生红文区</div> 
      <div class="weui-panel__bd">
        <a v-for="item in list9">
        <router-link :to="{ name: 'Info', params: { id: item.book._id }}" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img :src="item.book.cover" alt="" class="weui-media-box__thumb">
          </div> 
          <div class="weui-media-box__bd">
             <p class="y_b_title">{{item.book.title.length>9?item.book.title.substring(0,9)+'...':item.book.title}}<span v-if="item.book.isSerial" style="color:white;margin-left:5px;background:red;">连载</span><span v-else  style="color:white;margin-left:5px;background:green;">完结</span></p>
            <p class="y_b_shortIntro">{{item.book.shortIntro.substring(0,32)+'...'}}</p>
            <div style="padding-top:5px;">
              <p style="float:left;"><span>{{item.book.author}}</span>|<b style="color:#f00;">{{item.book.latelyFollower}}</b>人气</p><span style="float:right;border:1px solid orange;color:orange;padding:5px;line-height:1;">{{item.book.majorCate}}</span>
            </div>
          </div>
          </router-link>
        </a> 
      </div> 
      <div class="weui-panel__ft">
        <a href="javascript:;" class="weui-cell weui-cell_access weui-cell_link">
          <div class="weui-cell__bd">查看更多<b>></b></div>
        </a>
      </div>
    </div>`,
        created(){
            var url9 = "/recommendPage/books/591284376e2e237c36d7b8bd"
            Vue.axios.get(url9).then((res)=> {
            return  res.data
            }).then((data)=> {
              return data.data
            }).then((data) =>{
            
              this.list9 = data
            })


          },
        data () {
            return {
              list9: ''
            }
          }
        },
      "hotTop":{
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
          template:` <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">热门飙升榜</div> 
      <div class="weui-panel__bd">
        <a v-for="(item,index) in list10" style="font-size:12px;">
          <router-link :to="{ name: 'Info', params: { id: item._id }}" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-cell__hd">
            <!-- <img :src='"../assets/"+(index+1)+".png"' alt="" style="width: 20px; margin-right: 5px; display: block;"> -->
            <span style="border:1px solid #ccc;border-radius:100%;float:left;height:16px;width:16px;text-align:center;line-hright:18px;margin-right:5px;">{{index+1}}</span>
          </div> 
          <div class="weui-cell__bd">
            <p>{{item.title}}</p>
          </div> 
          <span class="weui-cell__ft"><span style="color:red;">{{(parseInt(item.latelyFollower)/10000).toFixed(1)}}万人</span>在追</span>
          </router-link>
          
        </a> 
      </div> 
      <div class="weui-panel__ft">
        <a href="javascript:;" class="weui-cell weui-cell_access weui-cell_link">
          <div class="weui-cell__bd">查看更多<b>></b></div>
        </a>
      </div>
    </div>`,
        created(){
            
            var url10 = "/recommendPage/bookStore/ranking"
            Vue.axios.get(url10).then((res)=> {
            return  res.data
            }).then((data)=> {
              return data.data
            }).then((data) =>{
             
              this.list10 = data
            })


          },
        data () {
            return {
              list10: ''
            }
          }
        }

  },
  created(){

      

    var url = "/recommendPage/books/5912825ba1dbf3ad33ee7ffe"
    Vue.axios.get(url).then((res)=> {
      return  res.data
      }).then((data)=> {
        return data.data
      }).then((data) =>{
        this.list = data
      })

    var url2 = "/recommendPage/books/59128334694d1cda365b8985"
    Vue.axios.get(url2).then((res)=> {
      return  res.data
      }).then((data)=> {
        return data.data
      }).then((data) =>{
        this.list2 = data
      })

      var url3 = "/recommendPage/books/59128365e5a3262c37488e3d"
      Vue.axios.get(url3).then((res)=> {
      return  res.data
      }).then((data)=> {
        return data.data
      }).then((data) =>{
        this.list3 = data
      })
  },
  methods: {
    onSwiperItemIndexChange (index) {
     
    },
    demo01_onIndexChange (index) {
      this.demo01_index = index
    },
    onFocus () {

      
    },
    onCancel () {
      
    },

  },
  data () {
    return {
     
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      value:""
    }
  }
}

</script>

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
  font-size: 12px;
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
y_box .fixed{
    width: 100%;
    position: relative;
    bottom: 0;
}
.page-homeFooter-wraper{
  background: #f4f4f4;
  width: 100%;
}
.page-homeFooter-wraper .homeFooter-top {
    padding: .46667rem 0 .33333rem;
    width: 100%;
}
.page-homeFooter-wraper .homeFooter-top .search {
    position: relative;
    padding: 0 .4rem;
    margin: 0;
    display: inline-block;
    width: 95%;
}
.page-homeFooter-wraper .homeFooter-top .search .search-icon {
    position: absolute;
    top: 0;
    left: .4rem;
    width: .8rem;
    height: .8rem;
    background: url("../assets/search.png") no-repeat;
    background-size: 50%;
    background-position: 50%;
}
.page-homeFooter-wraper .homeFooter-top .search input {
    float: left;
    width: 72%;
    height: .8rem;
    padding-left: .8rem;
    border: 1px solid #ebebeb;
    border-radius: 2px;
    -webkit-appearance: none;
    color: #222;
    font-weight: 400;
}
.page-homeFooter-wraper .homeFooter-top .search .search-btn {
    width: 14.5%;
    display: inline-block;
    padding-left: .13333rem;
    position: absolute;
    right: .4rem;
    top: -0.4555rem
}
.page-homeFooter-wraper .homeFooter-top .search .search-btn button {
    width: 90%;
    height: .8rem;
    border-radius: 2px;
    border: 1px solid #ebebeb;
    background: #fff;
}
.page-homeFooter-wraper .homeFooter-top .category {
    width: 100%;
    height: .8rem;
}
.page-homeFooter-wraper .homeFooter-top .category a {
    height: .8rem;
    padding-top: 9px;
    float: left;
    display: block;
    width: 20%;
    color: #333;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
}
.page-homeFooter-wraper .homeFooter-top .category a span {
    width: 100%;
    display: inline-block;
}
.page-homeFooter-wraper .homeFooter-top .co-info {
    margin-top: .4rem;
    color: #999;
    text-align: center;
    font-size: 10px;
    padding: 0 0.2rem;
}
.c-bottom-app-download {
  position: relative!important;
  background: #f4f4f4;
  left: 0;
  bottom: 0;
  width: 91%;
  height: 1.6rem;
  padding: 0rem 0.4rem 0.26667rem 0.53333rem;
  color: #fff;
}
.c-bottom-app-download .app-icon {
    display: inline-block;
    vertical-align: middle;
    width: 1.06667rem;
    height: 1.06667rem;
    border-radius: 2px;
    background-color: #ccc;
    background: url("../assets/zhui.png") no-repeat;
    background-size: cover;
}
.c-bottom-app-download .app-desc {
    display: inline-block;
    vertical-align: middle;
    line-height: .53333rem;
}
.c-bottom-app-download .app-link {
    float: right;
    width: 1.86667rem;
    height: .74667rem;
    line-height: .74667rem;
    margin-top: .6rem;
    background-color: #b93321;
    color: #fff;
    border-radius: 2px;
    text-align: center;
    font-size: 12px;
}
.page-homeFooter-wraper .c-bottom-app-download .app-desc p:first-child {
    color: #b93321;
    font-size: 12px;
}
.page-homeFooter-wraper .c-bottom-app-download .app-desc p:last-child {
    color: #999;
    font-size: 12px;
}
.clearfix{
  zoom: 1;
}
</style>
