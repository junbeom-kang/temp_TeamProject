import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld'; //메인 컴포넌트 호출
import List from '@/components/board/List'; //게시판 리스트 컴포넌트 호출
import Login from '@/components/board/Login';
import Index from '@/components/MovieIndexPage';
import Show from '@/components/MovieShowPage';

Vue.use(Router); //vue 라우터 사용
export default new Router({ //라우터 연결
	routes:[
		{
			path:'/hello'
			,name:HelloWorld
			,component:HelloWorld
		}
		,{
			path:'/board/list'
			,name:List
			,component:List
		}
        ,{
			path:'/board/login'
			,name:Login
			,component:Login
		}
		,{
			path:'/'
			,name:'index'
			,component:Index
		}
		,{
			path:'/:id'
			,name:'show'
			,component:Show
		}
	]
    
})
/*
export const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/:id',
            name: 'show',
            component: Show
        }
    ]
})
*/

