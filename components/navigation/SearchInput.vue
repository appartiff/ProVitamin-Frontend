<template>
  <form>
    <input v-model="message" placeholder="Søk">
    <div class="search"><font-awesome-icon :icon="['fas', 'search']"/></div>
  </form>

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
  form
  {
    align-items: center;
    justify-content: center;
    display:flex;
    border-radius: 13px;
    background: white;
  }
  input{
    min-width:400px;
  }
  @media #{$mobile} {
    input{
      min-width: 250px!important;

    }
  }

  input,.search
  {
    display: inline-block;
    border:0;
    box-sizing: content-box;
    margin: 0.7em;
    line-height: normal;
  }
  .search
  {
    margin: 0 0.7em;
    font-size: 1.2em;
  }
  svg
  {
    color:#999999;
  }
</style>
