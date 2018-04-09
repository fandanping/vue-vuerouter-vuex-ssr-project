import Vue from 'vue'

const app = new Vue({
  /*  el:"#root", */
  template: '<div>{{text}}---{{obj.a}}</div>',
  data: {
    text: 0,
    obj:{}
  }
  /*watch:{
    text (newText,oldText){
      console.log(newText)
      console.log(oldText)
    }
  }*/
})

app.$mount('#root')
/* app.text = 'fan' */

let i=0;
setInterval(() => {
/*  app.text += 1 */
app.$data.text +=1
  i++;
  /*app.obj.a=i;*/
 app.$set(app.obj,'a',i);

  app.$forceUpdate();
}, 1000)

//console.log(app.$data)
//console.log(app.$props)
//console.log(app.$el)
//console.log(app.$options)

/*app.$options.render = (h)=>{
  return h('div',{},'new render function')
}*/

//console.log(app.$root);
//console.log(app.$root === app);
//console.log(app.$children);

//console.log(app.$slots);
//console.log(app.$scopedSlots);


//console.log(app.$refs);

//console.log(app.$isServer);

//方法:监听
/*const unWatch=app.$watch('text',(newText,oldText)=>{
   console.log(newText)
  console.log(oldText)
})
setTimeout(()=>{
  unWatch()
},2000)*/

//app.$once()
app.$on('test',(a,b) =>{
  console.log('test emited'+a+b);
})

app.$emit('test',1,2)

//强制我们的组件去渲染一次
/*app.$forceUpdate();*/

