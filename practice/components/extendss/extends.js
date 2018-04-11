import Vue from 'vue';
const component={
  props:{
    active:Boolean,
    propOne:String
  },
  template:`<div>
                   <input type="text" v-model="text">
                   <span @click="handleChange">{{propOne}}</span>
                   <span v-show="active">see me if active</span>
             </div>`,
  data(){
    return{
      text:0
    }
  },
  mounted(){
    console.log('comp mounted');
  },
  methods:{
    handleChange(){
      this.$emit('change')
    }
  }
}

//子组件是可以改变的
const parent =new Vue({
  name:'parent'
})

const component2={

  extends:component,
  data(){
    return {
      text: 1
    }
  },
  mounted(){
   /* console.log('comp2 mounted')
    console.log(this.$parent.$options.name)*/
   /*this.$parent.text='12345'   //子组件里可以改变父组件的值*/
   console.log(this.$parent.$options.name)
  }
}
const CompVue=Vue.extend(component);

/*
new CompVue({
  el:'#root',
  propsData:{
    propOne:'XXX'   //ok，拿到
  },
  mounted(){
    console.log('instance mounted');
  },
  data:{
    text:123   //覆盖值
  }

})
*/

new Vue({
  parent:parent,
  name:'root1',
  el:'#root',
  components:{
    Comp:component2
  },
  data:{
     text:22
  },
  mounted(){
  console.log(this.$parent.$options.name)
},
  template:`
<div>
    <span>{{text}}</span>
    <comp></comp>
</div>
`
})


