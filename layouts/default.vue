<template>
  <div>
      <div class="flex-container main-nav color-background--dark-shade">
       <div class="logo-container">logo</div>
        <div class="search-container"><SearchInput></SearchInput>
        </div>
        <div class="nav-right-container">
          <nav>
            <NavigationLogin></NavigationLogin>
            <Basket></Basket>
          </nav>
        </div>
      </div>
      <div class="flex-container sub-nav color-background--dark-shade">
        <ul class="text--color--light-shades">
          <li>Produkter</li>
          <li>Merker</li>
          <li>Tilbud</li>
        </ul>
      </div>

    <nuxt />
  </div>
</template>
<script>
  import SearchInput from '../components/navigation/SearchInput';
  import NavigationLogin from '../components/navigation/NavigationLogin';
  import Basket from '../components/navigation/Basket';
  export default {
   components:
     {
      SearchInput,
       NavigationLogin,
       Basket
     }
  }
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.main-nav
{
  padding:0.8em 1em;
}
.sub-nav
{
  padding:0.8em 0;
}
.flex-container
{
  display:flex;
  color:#fff;
}
.search-container
{
  flex-grow:1;
  display: flex;           /* establish flex container */
  flex-direction: column;  /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items: center;     /* center items horizontally, in this case */
}
.logo-container
{
  flex-grow:1; /* default 0 */
}
  .nav-right-container
  {
    flex-grow:1;
  }

  ul
  {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
li {
  float: left;
  margin:0 1em;
  text-transform: uppercase;

}
li:hover
{
  color:#EE8D5A;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}
  nav
  {
    display: flex;
  }
</style>
