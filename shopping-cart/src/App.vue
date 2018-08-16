<template>
  <div id="app">
    <h1 id="title">Shopping List</h1>
    <!-- <HelloWorld></HelloWorld> -->
    <AddItemComponent></AddItemComponent>
    <ItemComponent v-bind:item="item"></ItemComponent>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ProductList from './components/ProductList'
import AddItemComponent from './components/ShoppingList/AddItemComponent'
import ItemComponent from './components/ShoppingList/ItemComponent'

import Vue from 'vue';

export default {
  name: 'app',
  components: {
    ProductList,
    HelloWorld,
    AddItemComponent,
    ItemComponent
  },
  data:function(){
    return {
      item : 'test'
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
