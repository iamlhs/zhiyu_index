import {defineStore} from 'pinia'
//下例中定义store,'testStore'为id
export const testStore=defineStore('testStore',{
    state:()=>{//所有页面共享的内存
        return {
            count:0
        }   
    },getters:{
        getCount(state){
            return state.count
        }
    },actions:{//和vue3的区别是actions里包含了mutations
        setCount(count:number){//actions可以理解为methods函数
            this.count=count
        }
    }
})