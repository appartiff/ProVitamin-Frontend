<template>
    <IconButton @clicked="gotoLogin" text="Logg inn">
      <font-awesome-icon slot="icon" :icon="['fas', 'user']"/>
    </IconButton>
</template>

<script>
  import IconButton from '../../../buttons/IconButton';

  export default {
    components:
      {
        IconButton
      },
    methods: {
      gotoLogin() {
        this.$router.push('/auth')
      }
    }
  }
</script>

<style scoped>
</style>
