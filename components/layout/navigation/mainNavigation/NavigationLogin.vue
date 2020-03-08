<template>
  <IconButton text="Logg inn">
    <font-awesome-icon slot="icon" :icon="['fas', 'user']"/>
  </IconButton>
</template>

<script>
  import IconButton from '../../../buttons/IconButton';

  export default {
    components:
      {
        IconButton
      }
  }
</script>

<style scoped>
</style>
