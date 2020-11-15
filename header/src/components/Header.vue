<template>
  <div class="hello">
    <h1> {{msg}}<Count />
    </h1>
  </div>
</template>

<script>
  import Count from './Count.vue'

  export default {
    name: 'Header',
    components: {
      Count
    },
    props: {
      msg: String
    }
  }
</script>
