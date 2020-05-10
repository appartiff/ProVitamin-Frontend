<template>
  <div class="control has-icons-right">
    <input class="input" type="text" placeholder="Search">
    <span class="icon is-small is-right">
      <font-awesome-icon :icon="['fas', 'search']" />
    </span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/variables/_variables.scss';

.control {
  max-width:450px;
  min-width:150px;
  width:100%;
}

  svg
  {
    color:#999999;
  }
</style>
