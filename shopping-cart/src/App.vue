<template>
  <div id="app">
    <h1 id="title">Shopping List</h1>
    <!-- <HelloWorld></HelloWorld> -->
    <AddItemComponent></AddItemComponent>
    <ItemsComponent :items="items"></ItemsComponent>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ProductList from './components/ProductList'
import AddItemComponent from './components/ShoppingList/AddItemComponent'
import ItemsComponent from './components/ShoppingList/ItemsComponent'
import ChangeTitleComponent from './components/ShoppingList/ChangeTitleComponent'

import Vue from 'vue';

export default {
  name: 'app',
  components: {
    ProductList,
    HelloWorld,
    AddItemComponent,
    ItemsComponent,
    ChangeTitleComponent
  },
  data () {
      return {
        items: [{ text: 'Bananas', checked: true },
                { text: 'Apples', checked: false }],
        title: 'My Shopping List'
      }
  },
  methods: {
      addItem (text) {
        this.items.push({
          text: text,
          checked: false
        })
      }
    }
  }

</script>

<style>
.container {
    width: 40%;
    margin: 20px auto 0px auto;
  }
  .footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
