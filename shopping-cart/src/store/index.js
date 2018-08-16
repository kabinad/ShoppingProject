import vuex, { mapActions } from 'vuex'
import vue from 'vue'
import shop from '@/api/shop'
vue.use(vuex)

export default new vuex.Store({

    state:{
        products : []
    },

    getters:{
        productsCount(){

        },
        availableProducts(state,getters){
            return state.products.filter(product =>product.inventory > 0)
        }

    },
    actions:{
        fetchProducts(context){
            shop.getProducts(products => { context.commit('setProducts',products) })    
        }
    },
    mutations:{
        setProducts(state,products){
            state.products = products;
        }
    }
})