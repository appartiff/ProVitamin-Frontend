<template>
  <div>
    <div class="navigation-dropdown-content" :class="stateChanged === true ? 'show' :''">
      <slot></slot>
    </div>
  </div>

</template>

<script>
    export default {
        props: {
            state: Boolean
        },
        computed: {
            stateChanged() {
                return this.state;
            }
        }
    }
</script>
<style lang="scss" scoped>
  @import '~/assets/styles/variables/_variables.scss';
    .show  {
        display: block!important;
    }
    .navigation-dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
</style>
<style lang="scss">
  @import '~/assets/styles/variables/_variables.scss';
  /* Links inside the dropdown */
  .navigation-dropdown-content a {
    color: $color--dark-shade;

    padding: 12px 16px;
    text-decoration: none;
    border-bottom: 1px solid $color--light-shades-darker;
    display: block;
  }
  /* Change color of dropdown links on hover */
  .navigation-dropdown-content a:hover {
    background-color: $color--light-shades;
  }

</style>
