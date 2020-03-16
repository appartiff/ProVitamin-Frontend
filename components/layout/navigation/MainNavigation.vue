<template>
  <div class="content--center">
    <div class="flex-container main-nav desktop--max-width width-full">
      <nuxt-link to="/#">
        <div class="logo-container">
          <img class="logo" src="~/assets/images/Logo.svg">
        </div>
      </nuxt-link>

      <div class="search-container">
        <SearchInput />
      </div>
      <div class="nav-right-container">
        <div class="flex">
          <NavigationLogin />
          <Basket />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
   import SearchInput from '@/components/layout/navigation/mainNavigation/SearchInput';
   import NavigationLogin from '@/components/layout/navigation/mainNavigation/NavigationLogin';
   import Basket from '@/components/layout/navigation/mainNavigation/Basket';
    export default {
        components: {
            SearchInput,
            NavigationLogin,
            Basket
        }
    }
</script>

<style lang="scss" scoped>


  @import '~/assets/styles/variables/_variables.scss';

  .main-nav {
    padding: 1em;
  }
  .search-container {
    flex-grow: 1;
    display: flex; /* establish flex container */
    flex-direction: column; /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center; /* center items horizontally, in this case */
  }
  @media #{$mobile} {
    .search-container{
      order: 1;
      padding: 1em!important;
    }
  }
  @media #{$tablet} {
    .search-container{
      order: 1;
      padding: 1em!important;
    }
    .logo-container {
      justify-content: left!important;
    }
  }
  .logo-container {
    flex-grow: 1; /* default 0 */
    display: flex;
    justify-content: left;
  }

  .nav-right-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: right!important;
  }
</style>
