<template>
  <div>
   <h1>Product List</h1>
   <span>{{products.length}}</span>
  <ul>
    <li v-for="product in products" :key="product.id">
          {{ product.title }}
    </li>
  </ul>
  </div>
</template>


<script>
import shop from '@/api/shop'
import store from '@/store/index'

export default {
    computed :{
        products (){
            // return store.state.products
            return store.getters.availableProducts
        }
    },

  created ()
  {
      store.dispatch('fetchProducts')
  }
}
</script>
