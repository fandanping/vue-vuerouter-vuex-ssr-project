import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'
export default [
  {
    path:'/',
    redirect:'/app'
  },
  {
   /* path:'/app/:id',*/
   /* path:'/app/:id',*/
    path:'/app',
    props:true,
    /*component:() => import('../views/todo/todo.vue'),*/
    component:Todo,
   /* components:{
       default:Todo,
       a:Login
    },*/
/*    props:true,*/
     /*props:{
       id:'456'
     },*/
  /*  props:(route) =>({
         id:route.query.b
    }),*/
/*    component:Todo,*/
    name:'app',
    meta:{
       title:'this is app',
       description:'asasas'
    },
    beforeEnter(to,from,next){
        console.log('app route before enter');
        next()
    },
    children:[
      {
        path:'test',
        component:Login
      }
    ]
  },
  {
    path:'/login',
    component:Login
   /* components:{
       default:Login,
       a:Todo
    }*/
  },{
    path:'/login/exact',
    component:Login
  }
]
