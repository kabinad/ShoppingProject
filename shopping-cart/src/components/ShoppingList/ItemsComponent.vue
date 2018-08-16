<template>
  <div>
    <h1>test....</h1>
    <ItemComponent v-for="item in items" :item="item"></ItemComponent>
     <!-- <item-component v-for="item in items" :item="item"></item-component> -->
  </div>
</template>

<script>
  import ItemComponent from './ItemComponent.vue'

  export default {
    components: {
      ItemComponent
    },
    props: ['items']
  }
</script>

<style scoped>
</style>
