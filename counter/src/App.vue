<template>
  <div id="app">
    <h1>counting......</h1>
    <button @click="incrementCount">Add to Count</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    incrementCount: () =>{
      window.mfe.storeCounter.addToCount()
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
