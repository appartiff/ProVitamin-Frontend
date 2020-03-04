<template>
  <div>
    <header>
      <div id="navbar">
        <section class="header-section">
          <div class="content--center">
            <div class="flex-container main-nav desktop--max-width width-full">
              <div class="logo-container">
                <img class="logo" src="~/assets/images/Logo.png">
              </div>
              <div class="search-container">
                <SearchInput />
              </div>
              <div class="nav-right-container">
                <nav>
                  <NavigationLogin />
                  <Basket />
                </nav>
              </div>
            </div>
          </div>
          <div class="content--center">
            <div class="flex-container sub-nav desktop--max-width width-full">
              <ul>
                <li>
                  <Products />
                </li>
                <li>
                  <Brands />
                </li>
                <li>
                  <NavigationCell text="Tilbud" />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </header>
    <nuxt />
    <Footer />
  </div>
</template>
<script>
    import SearchInput from '../components/navigation/SearchInput';
    import NavigationLogin from '../components/navigation/NavigationLogin';
    import Basket from '../components/navigation/Basket';
    import NavigationCell from '../components/buttons/NavigationCell';
    import Products from '../components/menuNavigation/Products';
    import Brands from '../components/menuNavigation/Brands';
    import Footer from '~/components/layout/Footer';
    export default {
        components:
            {
                SearchInput,
                NavigationLogin,
                Basket,
                NavigationCell,
                Products,
                Brands,
                Footer
                
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
    
    html {
        box-sizing: border-box;
    }
    
    header {
        background-color: $color--dark-shade;
    }
    .main-nav {
        padding: 1em;
    }

    #navbar * {
        box-sizing: border-box;
    }

    .header-section {
        display: flex;
        flex-direction: column;
    }

    .width-full {
        width: 100%;
    }
    
    .content--center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flex-container {
        display: flex;
        color: #fff;
    }

    .search-container {
        flex-grow: 1;
        display: flex; /* establish flex container */
        flex-direction: column; /* make main axis vertical */
        justify-content: center; /* center items vertically, in this case */
        align-items: center; /* center items horizontally, in this case */
    }

    .logo-container {
        flex-grow: 1; /* default 0 */
    }

    .nav-right-container {
        flex-grow: 1;
      display: flex;
      align-items: center;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        color: $color--light-shades;
    }

    li {
        float: left;
    }

    li a {

        display: block;
        color: white;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }

    nav {
        display: flex;
    }
</style>
