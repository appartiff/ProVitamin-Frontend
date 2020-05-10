<template>
  <nav class="content--center sub-nav">
    <div class="flex-container desktop--max-width width-full">
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
  </nav>
</template>

<script>
    import NavigationCell from '@/components/buttons/NavigationCell';
    import Products from '@/base-blocks/navigation/subNavigation/Products';
    import Brands from '@/base-blocks/navigation/subNavigation/Brands';
    export default {
      components: {
          NavigationCell,
          Products,
          Brands
      }
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/styles/variables/_variables.scss';

    .sub-nav{
        background: #50546D;
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
