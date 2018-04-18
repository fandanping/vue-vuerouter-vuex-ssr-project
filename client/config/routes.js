import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'
export default [
  {
    path:'/',
    redirect:'/app'
  },
  {
   /* path:'/app/:id',*/
    path:'/app',
/*    props:true,*/
     /*props:{
       id:'456'
     },*/
  /*  props:(route) =>({
         id:route.query.b
    }),*/
    component:Todo,
    name:'app',
    meta:{
       title:'this is app',
      description:'asasas'
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
  },{
    path:'/login/exact',
    component:Login
  }
]
