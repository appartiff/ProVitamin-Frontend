<template>
  <div class="site">
    <header>
      <section class="header-section">
        <MainNavigation></MainNavigation>
        <SubNavigation></SubNavigation>
      </section>
    </header>
    <div class="site-content">
      <Breadcrumbs />
      <nuxt />
    </div>

    <Footer />
  </div>
</template>
<script>

     import SubNavigation from '@/components/layout/navigation/SubNavigation';
    import MainNavigation from '@/components/layout/navigation/MainNavigation';
    import Footer from '@/components/layout/Footer/Footer';
    import Breadcrumbs from '@/components/Breadcrumbs';
    export default {
        components:
            {
                MainNavigation,
                SubNavigation,
                Footer,
                Breadcrumbs
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
