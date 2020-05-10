<template>
  <section class="section">
    <div class="container">
      <slot>

      </slot>
    </div>
  </section>
</template>

<script>

    export default {
        name: 'Index',
      components: {

      }

    }
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/variables/_variables.scss';

  @media #{$mobile} {
    .button {
      width:100%;
      display:flex;
    }
  }
    .container  {
        margin: auto;
        max-width: 500px;
        background: white;
      padding:2em;
      border:1px solid lightgray;
    }
</style>