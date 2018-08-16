<template>
  <div class="checkbox">
      <label>
        <input type="checkbox" v-model="item"> {{item}} </label>
      <h1>i am here!</h1>
    </div>
</template>

<script>
export default {
  props: ['item']

}
</script>


<style>

</style>

