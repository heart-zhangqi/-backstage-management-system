//shop的状态管理

import {
    SHOP_ADD ,
    SHOP_DEL,
    SHOP_MODIFY,
    SHOP_QUERY 
} from '../pub'


import request from '../../utils/request.js'
export default {
    state :{
        data:null
    },
    actions:{
        async add({commit},payload){
            const result = await request({
                url:'/shop',
                method:'POST',
                data:payload
            })
            commit({
                type:SHOP_ADD,
                payload:result.data
            })
        },
        async del({commit},_id){
            console.log(_id)
            const result = await request({
                url:'/shop',
                method:'DELETE',
                params:{
                    _id
                }
            })
            commit({
                type:SHOP_DEL,
                payload:result.data.result
            
            })
        },
        modfiy(){},
        async query({commit}){
            const result = await request({
                url:'/shop',
                method:'GET'
            })
            commit({
                type:SHOP_QUERY,
                payload:result.data.result
            })
        }
    },
    mutations:{
        SHOP_ADD(state,action){
            state.data = action.payload
        },
        SHOP_DEL(state,action){
            state.data = action.payload
        },
        SHOP_MODIFY(){},
        SHOP_QUERY(state,action){
            state.data = action.payload
        }
    }
}


  