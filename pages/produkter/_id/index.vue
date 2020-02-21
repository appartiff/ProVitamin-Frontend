<template>
  <h1>produkt {{ $route.params.id }}</h1>
</template>
<script>
  export default {
    validate(data) {
      return /^\d+$/.test(data.params.id);
    }
  }
</script>

<style scoped>
</style>
