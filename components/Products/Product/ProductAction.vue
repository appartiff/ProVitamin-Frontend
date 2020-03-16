<template>
  <section class="product-action-section">
    <div class="flex-container column">
      <span class="price-now"> {{ product.pricing }},-</span>
    </div>
    <div class="buy-button-container">
      <FlatButton text="Legg i handlevogn" upper-case="true" />
    </div>
    <div class="inventory-container">
      <span>Tilgjengelig på lager: 40+</span>
    </div>
  </section>
</template>

<script>
    import FlatButton from '@/components/buttons/FlatButton';
    export default {
        name: 'ProductAction',
        components: {
          FlatButton
        },
      props: {
          product: {
            required: true,
            type: Object
          }
      }
    }
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/variables/_variables.scss';
  .product-action-section{
    grid-area: c;
    background-color: $color--light-shades;
  .price-now{
    font-size:2em;
  }
  .buy-button-container{
    margin: 1em 0;
  }
  }
</style>
