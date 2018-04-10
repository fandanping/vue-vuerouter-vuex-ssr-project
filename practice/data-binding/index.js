import Vue from 'vue'


new Vue({
  el:'#root',
  /*template:'<div>{{isActive ? "active":"not active"}}</div>',*/
/*  template:'<div>{{arr.join(" ")}}</div>',*/
  /*template:'<div v-bind:id="testid"  v-on:click="handleClick"><p v-html="htmla"></p></div>',*/
/*  template:'<div ><p :class="{active:isActive}" >123</p></div>',*/
  /*template:`<div v-bind:class="[isActive ? 'activeClass' : '']"> wewew</div>`,*/
 /* template:`<div  :class="[{active:isActive}]" :style="styles">
      <p>{{getJoinArr(arr)}}</p>

</div>`,*/
  template:`<div  :class="[{active:isActive}]" :style="[styles,styles2]"> 
      <p>{{getJoinArr(arr)}}</p>

</div>`,
  data:{
    isActive:false,
    arr:[1,2,3],
    htmla:'<span>123</span>',
    testid:'testaaaa',
    isActive:true,
    styles:{
      color:'red',
      appearance:'none'
    },
    styles2:{
     color:'black'
    }
  },
  methods:{
    handleClick(){
      alert("clicked ");
    },
    getJoinArr (arr){
       return arr.join(' ')
    }
  },
  computed:{
    classNames(){

    }
  }
})
