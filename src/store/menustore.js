export default {
    state:{
        status:false,
        tab: 0
    },
    mutations:{
    	menustate(state,data){
          state.status = data.status
          state.tab = data.tab
        }
    }
}