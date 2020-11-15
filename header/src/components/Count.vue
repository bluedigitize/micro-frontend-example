<template>
    <div>{{ count }}</div>
</template>

<script>
  export default {
    name: 'Count',
    data: () => ({
      count: window.mfe.storeCounter.count,
    }),
    mounted() {
      window.addEventListener('countChange', () => {
        this.count = window.mfe.storeCounter.count;
      });
    },
  }
</script>
