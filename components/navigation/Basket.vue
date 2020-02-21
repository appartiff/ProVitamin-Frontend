<template>

  <IconButton text="Handlekurv">
    <font-awesome-icon slot="icon" :icon="['fas', 'shopping-basket']"/>
  </IconButton>
</template>

<script>
  import IconButton from '../buttons/IconButton';
  export default {
    components:
      {
        IconButton
      }
  }
</script>

<style scoped>
</style>
