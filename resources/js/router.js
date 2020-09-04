import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import main from './components/pages/main'
import page1 from './components/pages/page1'
import page2 from './components/pages/page2'
import page3 from './components/pages/page3'
import page4 from './components/pages/page4'
import page5 from './components/pages/page5'
import page6 from './components/pages/page6'
import page7 from './components/pages/page7'
import page8 from './components/pages/page8'
import adminPage from './components/pages/adminPage'


const routes = [
    //projects routes...

    { 
        path: '/',
        component: main,
        name : '/',
    },

    { 
        path: '/main',
        component: main,
        name : 'main',
    },

    { 
        path: '/page1',
        component: page1,
        name : 'page1',
    },

    { 
        path: '/page2/:id',
        component: page2,
        name : 'page2',
    },
    
    { 
        path: '/page3',
        component: page3,
        name : 'page3',
    },

    { 
        path: '/page4',
        component: page4,
        name : 'page4',
    },

    

    { 
        path: '/page5',
        component: page5,
        name : 'page5',
    },
    
    { 
        path: '/page6',
        component: page6,
        name : 'page6',
    },
    
    { 
        path: '/page7',
        component: page7,
        name : 'page7',
    },
    
    { 
        path: '/page8',
        component: page8,
        name : 'page8',
    },
    { 
        path: '/adminPage',
        component: adminPage,
        name : 'adminPage',
    },
    {
        path: '*',
        component : main
    }
]



export default new Router({
    mode: 'history',
    routes
})