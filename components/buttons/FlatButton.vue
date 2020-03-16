<template>
  <button :class="{ rounded: rounded }">
    <span :class="{ upperCase: upperCase }">{{ text }}</span>
  </button>
</template>

<script>
    export default {
        name: 'BuyButton',
      props:
              {
                text: {
                  type: String,
                  required: true
                },
                rounded: Boolean,
                upperCase: Boolean
              }
    }
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/variables/_variables.scss';
  button {

    border:0;
    background-color: $color--light-accent;
    span{
      color:$color--light-shades;
      font-size:1.25em;
      font-weight:400;
      padding: 0.25em .5em;
      display:block;
    }
    .upperCase{
      text-transform: uppercase;
    }
  }
  .rounded {
    border-radius: 3px;
  }
  button:hover{
    background-color: $color--light-accent-ligher;
  }

</style>
