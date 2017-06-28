// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import Home from './components/HelloFromVux'
import Classify from './components/Classify'
import Ranking from './components/Ranking'
import BookList from './components/BookList'
import Month from './components/Month'
import RankingList from './components/RankingList'
import Personal from './components/Personal'
import MyBook from './components/MyBook'
import MyMoney from './components/MyMoney'
import Tickit from './components/Tickit'
import Info from './components/Info'
import WeekBang from './components/WeekBang'
import MonthBang from './components/MonthBang'
import AllBang from './components/AllBang'
import kindList from './components/kindList'
import bookListContent from './components/bookListContent'
import page from './components/page'
import Login from './components/Login'


Vue.use(VueRouter)
Vue.use(VueAxios, axios)
const routes = [
	{
	  path: '/',
	  component: Home
	},
	{
	  path: '/classify',
	  name: 'Classify',
      component: Classify
	},
	{
		path:'/kindList/:id',
		name:'kindList',
		component:kindList
	},
	{
	  path: '/ranking',
	  name: 'Ranking',
      component: Ranking
	},

	{
	  path: '/ranking/:id',
      name: 'RankingList',
      component: RankingList,
      children:[
			{
				path: '/weekBang/:id',
				name: 'WeekBang',
		      	component: WeekBang
			},
			{
				path: '/monthBang/:id',
				name: 'MonthBang',
		      	component: MonthBang
			},
			{
				path: '/allBang/:id',
				name: 'AllBang',
		      	component: AllBang
			}
      	]
	},
	{
	  path: '/bookList',
	  name: 'BookList',
      component: BookList
	},
	{
		path:'/bookListContent/:id',
		name:'bookListContent',
		component:bookListContent
	},
	{
		path: '/month',
		name: 'Month',
      	component: Month
	},
	{
		path: '/personal',
		name: 'Personal',
      	component: Personal
	},
	{
		path: '/myBook',
		name: 'MyBook',
      	component: MyBook
	},
	{
		path: '/myMoney',
		name: 'MyMoney',
      	component: MyMoney
	},
	{
		path: '/tickit',
		name: 'Tickit',
      	component: Tickit
	},
	{
		path: '/info/:id',
		name: 'Info',
      	component: Info
	},
	{
		path: '/page/:id',
		name: 'page',
      	component: page
	},
	{
		path: '/login',
		name: 'Login',
      	component: Login
	}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
