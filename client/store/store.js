import Vuex from 'vuex'

import defaultState from './state/state'
import  mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'
/*import Vue from 'vue'

Vue.use(Vuex)*/

/*const store=new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    updateCount(state,num){
       state.count=num
    }
  }
})

export default store;*/
const isDev=process.env.NODE_ENV === 'development'

export default()=>{
   const store= new Vuex.Store({
     strict:isDev,
     state:defaultState,
     mutations:mutations,
     getters,
     actions,
     modules:{
        a:{
          namespaced:true,
          state:{
            text:1
          },
          mutations:{
            updateText(state,text){
                state.text=text
            }
          },
          getters:{
            textPlus(state,getters,rootState){
                   return state.text+rootState.b.text
            }
          },
          //.....
          actions:{
            add({state,commit,rootState}){
                  commit('updateCount',{num:56789},{root:true})
            }
          }
        },
       b:{
         namespaced:true,
         state:{
           text:2
         },
         actions:{
           testAction(commit){
               commit('a/updatetext','test text',{root:true})
           }
         }
       }
     }

   })

  if(module.hot){
     module.hot.accept([
       './state/state',
       './mutations/mutations',
       './actions/actions',
       './getters/getters'
     ],()=>{
       const newState =require('./state/state').default
       const newMutations =require('./mutations/mutations').default
       const newActions =require('./actions/actions').default
       const newGetters =require('./getters/getters').default

       store.hotUpdate({
          state:newState,
          mutations:newMutations,
          getters:newGetters,
          actions:newActions
       })
     })
  }
  return  store

}
