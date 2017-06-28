<template>
  <div>
    <swiper height="6rem" :list="demo01_list" auto v-model="demo01_index" @on-index-change="demo01_onIndexChange" :loop='true'></swiper>
  </div>

</template>

<script>
import { Swiper, GroupTitle, SwiperItem, Divider, Search, Group, Cell } from 'vux'

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]

const only2ClickList = baseList.slice(0, 2).map(item => {
  item.url = 'http://m.baidu.com'
  return item
})

export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    Divider,
    Search,
    Group,
    Cell
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    demo01_onIndexChange (index) {
      this.demo01_index = index
    },
    setFocus () {
      this.$refs.search.setFocus()
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      
    onCancel () {
      
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      demo01_list: baseList,
      demo01_index: 0,
      swiperItemIndex: 1,
      results: [],
      value: 'test'
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style scoped>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
#app .weui-search-bar.weui-search-bar_focusing .weui-search-bar__cancel-btn{
  background: #c9b388;
}
  
</style>
