import Vue from 'vue';
/*v-cloak*/
new Vue({
   el:'#root',
  template:`
   <!--<div v-text="text"></div>-->
   <!--  <div v-text="'test: '+text"></div>-->
   <!-- <div v-html="testhtml"></div>-->
   <div>
      <!-- <div v-show="active">test v-show</div>-->
      <!-- <div v-if="active">test v-if</div>&lt;!&ndash;v-if b不显示时，不显示在文档流中&ndash;&gt;
       <div v-else-if="text === 0">else if content</div>
       <div v-else>else content</div>-->
       <ul>
          <li v-for="(item,index) in arr" :key="item">{{item}}:{{index}}</li>
       </ul>
       <ul>
          <li v-for="(val,key,index) in  obj">{{val}}--{{key}}--{{index}}</li>
       </ul>
   </div>
  `,
  data:{
     text:0,
     active:true,
     testhtml:'<p> test html</p>',
     arr:[1,2,3],
    obj:{
       a:'aaa',
       b:'bbb',
       c:'ccc'
    }

  }

})
