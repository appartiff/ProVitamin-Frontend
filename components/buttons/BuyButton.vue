<template>
  <button>
    <span>Kjøp</span>
  </button>
</template>

<script>
    export default {
        name: 'BuyButton'
    }
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/variables/_variables.scss';
  button{
    border-radius: 3px;
    border:0;
    background-color: $color--light-accent;
    span{
      color:$color--light-shades;
      font-size:1.25em;
      font-weight:400;
      padding: 0.25em .5em;
      display:block;
    }
  }
  button:hover{
    background-color: $color--light-accent-ligher;
  }

</style>
