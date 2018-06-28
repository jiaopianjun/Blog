export default {
    state:{
        status:false
    },
    mutations:{
    	menustate(state,data){
          state.status = data.status
        }
    }
}