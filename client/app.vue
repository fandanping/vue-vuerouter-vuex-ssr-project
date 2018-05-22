<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
      <p>{{fullName}}{{counter}}</p>
      <p>{{textC}} {{textPlus}}</p>
      <!--  <p>{{fullName}}{{count}}</p>-->
     <!-- <todo></todo>-->
     <!-- <router-link to="{name:'app'}">app</router-link>-->
      <router-link to="/app/123">app123</router-link>
      <router-link to="/app/456">app456</router-link>
      <router-link to="/login">login</router-link>
      <router-link to="/login/exact">login-exact</router-link>
      <router-view></router-view>
      <Footer></Footer>
     <!-- <router-view name="a"></router-view>-->
    </div>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
  }from 'vuex'
    import Header from './layout/header.vue'
    import Footer from './layout/footer.jsx'
    import Todo from './views/todo/todo.vue'

    console.log(Header.__docs)
    export default {
      components: {
        Header,
        Footer,
        Todo
      },
      mounted(){
        console.log(this.$store,this['a/textPlus'])
    /*    this['a/updateText']('123')*/
       /* this['a/add']()*/

       this['b/testAction']
        //this.updateText('123')
     /*   console.log(this.$route +"!!!!")*/
        console.log(this.$store);
       /* let i=1;
        setInterval(()=>{
          //commit只能接受两个参数
          this.updateCount({
            num:i++,
            num2:2
          })
        },1000)*/
        this.updateCountAsync({
          num:5,
          time:2000
        })

      },
      computed:{
      /* textA(){
          return this.$store.state.b.text
        },*/
       /* ...mapState(['count'])*/
      /*  ...mapState({
          counter:'count'
        })*/
        ...mapState({
          counter:(state)=>state.count,
          textA:state=> state.a.text,
          textC:state=>state.c.text
        }),
       /* count(){
          return this.$store.state.count
        }*/
       /* ,
        fullname(){
          return this.$store.getters.fullName
        }*/

      /*  ...mapGetters(['fullName','a/textPlus'])*/
        ...mapGetters({
          'fullName':'fullName',
           textPlus:'a/textPlus'
        })
      },
      methods:{
        ...mapActions(['updateCountAsync','a/add','b/testAction']),
        ...mapMutations(['updateCount','a/updateText'])
      }
    }
</script>

<style lang="stylus" scoped>
    #app{
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }
    #cover{
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color #999
        opacity .9
        z-index -1
    }
</style>







