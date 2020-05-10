<template>
  <div class="content--center">
    <div class="flex-container main-nav desktop--max-width width-full">
      <nuxt-link to="/#">
        <div class="logo-container">
          <img class="logo" src="~/assets/images/Logo.svg">
        </div>
      </nuxt-link>
      <div class="search-container" :class="mobile ? 'active' :''">
        <SearchInput />
      </div>
      <div class="nav-right-container">
        <div class="flex">
          <NavigationLogin />
          <Basket v-if="!mobile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
   import SearchInput from '@/base-blocks/navigation/mainNavigation/SearchInput';
   import NavigationLogin from '@/base-blocks/navigation/mainNavigation/NavigationLogin';
   import Basket from '@/base-blocks/navigation/mainNavigation/Basket';
    export default {
        components: {
            SearchInput,
            NavigationLogin,
            Basket
        },

        computed: {
          ...mapState('layout', ['mobile'])
        }

    }
</script>

<style lang="scss" scoped>


  @import '~/assets/styles/variables/_variables.scss';

  .flex-container {
    justify-content: space-between;
  }
  .flex-container > * {
    flex-grow: 1;
  }

  .active {
    order: 3;
    flex: 1 0 100%;
  }

  .main-nav {
    padding-top:1em;
    padding-right: 1em;
    padding-left:1em;
  }
  .main-nav > * {
    padding-bottom: 1em;
  }
  .search-container {
    display: flex;
    justify-content: center; /* center items vertically, in this case */
    align-items: center; /* center items horizontally, in this case */
  }

  .logo-container {
    display: flex;
    justify-content: left;
  }
  .nav-right-container {
    display: flex;
    align-items: center;
    justify-content: right!important;
  }
</style>
