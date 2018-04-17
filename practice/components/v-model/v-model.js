import Vue from 'vue';

const component={
  props:['value'],
  template:`
  <div>
     <input type="text" @input="handleInput" :value="value">
</div>
  `,
  methods:{
    handleInput(e){
      this.$emit('input',e.target.value)
    }
  }
}
new Vue({
  components:{
    CompOne:component
  },
  el:'#root',
  data(){
    return  {value:'123'}
  },
  template:`
  <div>
      <comp-one :value="value" @input="value=arguments[0]"></comp-one>
  </div>
  `
})
