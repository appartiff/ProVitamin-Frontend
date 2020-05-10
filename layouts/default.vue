<template>
  <div class="site">
    <header>
      <section class="header-section">
        <MainNavigation />
        <SubNavigationDesktop v-if="mobile===false" />
        <SubNavigationMobile v-if="mobile"/>
      </section>
    </header>
    <div class="site-content">
      <Breadcrumbs />
      <nuxt />
    </div>
    <Footer />
    <OnWindowResizeService/>
  </div>
</template>
<script>


     import { mapState } from 'vuex'
     import SubNavigationDesktop from '@/components/layout/navigation/SubNavigationDesktop';
     import SubNavigationMobile from '@/components/layout/navigation/SubNavigationMobile';
    import MainNavigation from '@/components/layout/navigation/MainNavigation';
    import Footer from '@/base-blocks/Footer';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import OnWindowResizeService from '@/components/OnWindowResizeService';

    export default {
        components:
            {
                MainNavigation,
                SubNavigationDesktop,
                Footer,
                Breadcrumbs,
              OnWindowResizeService,
              SubNavigationMobile
            },
      computed: {
        ...mapState('layout', ['mobile'])
      }
    }
</script>

<style>
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }
</style>
<style scoped lang="scss">
  @import '~/assets/styles/variables/_variables.scss';
  .site{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .site-content{
    flex: 1;
    background-color: $color--light-shades;
  }


    
    html {
        box-sizing: border-box;
    }
    
    header {
        background-color: $color--dark-shade;
    }
    .header-section {
        display: flex;
        flex-direction: column;
    }
</style>
