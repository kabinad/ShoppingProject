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

export default {
  data(){
      return { products : []
      }
  },

  created () 
  {
      shop.getProducts(products => { this.products = products })    
  }
}
</script>