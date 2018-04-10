import Vue from 'vue';

const data={
  text:0
}
const component={
  //props:['active','propOne']
  /*
  * props:{
  *   active:{
  *      type:Bollean,
  *     // required:true,
  *      //default:true,
  *      default(){},
  *      validator (value){
  *      return typeof value === 'boolean'
  *      }
  *   }
  * }
  *
  * */
  props:{ //定义组件被外部使用时，一些可用的行为的
     active:Boolean,
     propOne:String/*,
     onChange:Function*/
  },
  template:`<div>
                   <input type="text" v-model="text">
                   <span @click="handleChange">{{propOne}}</span>
                   <span v-show="active">see me if active</span>
             </div>`,
  data(){  //data必须是一个function
    return{
      //return 不能返回一个全局对象，必须是一个新建的对象
    // data
      text:0
    }
  },
/*  mounted(){
     this.propOne='inner content'   /!*不建议修改*!/
  },*/
  methods:{
    handleChange(){
    /*  this.onChange()*/
        this.$emit('change')
    }
  }
}
//1.全局
//Vue.component('CompOne',component);

new Vue({
  //2.局部
  components:{
    CompOne:component
  },
  data: {
    prop1: 'text1'
  },
  el:'#root',
  template:`<div>
            <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
            <comp-one :active="true" propOne="text2"></comp-one> 
            <comp-one :active="true"></comp-one> 
  </div>`,
  methods:{
    handleChange(){
      this.prop1 +=1;
    }
  },
  mounted(){
      console.log(this.$refs.comp1);
  }
})

//prop-one :建议模板中使用
//propOne :写在变量定义的地方

//props单向数据流
