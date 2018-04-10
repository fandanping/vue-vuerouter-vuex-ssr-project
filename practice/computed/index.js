import Vue from 'vue'

new Vue({
  el:'#root',
  template:`<div> 
                  <p>{{getName}}</p>
                   <input type="text" v-model="firstName">
                   <input type="text" v-model="lastName">
                   <br>
                   <input type="text" v-model="name">
                   <p>{{fullName}}</p>
                   <input type="text" v-model="obj.a">
             </div>
          
`,
  data:{
     firstName:'fan',
     lastName:'danping',
     fullName:'',
    obj:{
       a:'aaaaa'
    }
  },
  computed:{
    getName(){
      console.log("new new new");
      return this.firstName+this.lastName;
    },
    name:{
      get(){
        console.log('new name');
        return this.firstName+this.lastName;
      },
      set(name){
          const names=name.split('')
          this.firstName=names[0]
          this.lastName=name[1]
      }
    }
  },
  methods:{

  }/*,
  watch:{
    firstName:{
      handler(newName,oldName){
        this.fullName=newName+' '+this.lastName;
      },
      immediate:true
    }
  }*/,
 /* watch:{
    obj:{
      handler(){
        console.log('111obj.a changed')
      },
      immediate:true
    }
  },*/
  watch:{
    'obj.a':{
      handler(){
        console.log('111obj.a changed')
      },
      immediate:true/*,
      deep:true*/
    }
  }/*,
  mounted(){
    this.obj={
      a:'345'
    }
  }*/

})

