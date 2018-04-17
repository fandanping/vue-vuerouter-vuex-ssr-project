import Vue from 'vue';
///未完
const ChildComponent={
  template:'<div>child component</div>',
  inject:['yeye','value'],
  mounted(){
    //console.log(this.$parent.$options.name) //只能找到上一级
    console.log(this.yeye,this.value)
  }
}

const component={
  name:'comp',
  components:{
    ChildComponent
  },
  template:`
  <div :style="style">
  <!--  <slot></slot>-->
    <!--  <div class="header">
          <slot name="header"></slot>
      </div>
      <div class="body">
          <slot name="body"></slot>
     </div>-->
     <slot :value="value" aaa="111"></slot>
     <child-component></child-component>
</div>
  `,
  data(){
    return{
      style:{
        width:'200px',
        height:'200px',
        border:'1px solid #aaa'
      },
      value:'component value'
    }
  }
}

new Vue({
  components:{
    CompOne:component
  },
  provide(){
     return{
       yeye:this,
       value:this.value
     }
  },
  el:'#root',
  data(){
    return {
      value:'123'
    }
  },
  mounted(){
  console.log("11"+this.$refs.comp.value);
  console.log("22"+this.$refs.span);
  },
  template:`
   <div>
      <comp-one  ref="comp">
       <!--  <span slot="header">this is header</span>
         <span slot="body">this is body</span>-->
         <span slot-scope="propsaa" ref="span">{{propsaa.value}}---{{propsaa.aaa}} ---{{value}}</span>
         <input type="text" v-model="value">
      </comp-one>
</div>
  `
})
