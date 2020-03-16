<template>
  <div class="container desktop--max-width">
    <div class="product-container">
      <section class="product-title-section">
        <h1>{{ product.details.title }}</h1>
        <span> Av: <nuxt-link :to="`produkter/${toHyphenAndLowerCaseFromSpace(product.details.brand)}`">{{ product.details.brand }} </nuxt-link> </span>
      </section>
      <section class="image-section">
        <img class="product-image" :src="product.imageUrl">
      </section>
      <section class="product-action-section">
        <div class="flex-container column">
          <span class="price-now"> {{ product.pricing }},-</span>
        </div>
        <div class="buy-button-container">
          <FlatButton text="Legg i handlevogn" upper-case="true"/>
        </div>
        <div class="inventory-container">
          <span>Tilgjengelig på lager: 40+</span>
        </div>
      </section>
      <section class="product-main-info-section">
        <ul>
          <li> <span>Dimensjoner: </span>{{ product.details.dimensions }}</li>
          <li> <span>Kvantitet: </span>{{ product.details.quantity.size }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>

  import { mapGetters } from 'vuex';
  import FlatButton from '@/components/buttons/FlatButton';
  export default {

    components: {
      FlatButton
    },
    validate(data) {
      return /^\d+$/.test(data.params.id);
    },
    data() {
      return {
        id: this.$route.params.id
      };
    },
    computed: {
      ...mapGetters({
        getProductById: 'products/productById'
      }),
      product() {
        return this.getProductById(this.$route.params.id);
      }
    },
    methods: {
      toHyphenAndLowerCaseFromSpace(value) {
        return value.replace(/ /g, '-').toLowerCase();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/variables/_variables.scss';

  a {
    color: $color--main-brand;
  }

  .product-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-areas: ". title title" "a main-info c";
    width: 100%;
    padding: 0 16px;
  }
  .product-title-section{
    grid-area: title;
    overflow: hidden;
    margin: 0 0 1.05rem;
  }
  .product-main-info-section{
    grid-area:main-info;

    ul{

    }
  }
  .image-section{
    grid-area: a;
    .product-image {
      max-width: 100%;
      width: 300px;
      margin-right:20px;
    }
  }
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

h1 {
  font-size: 1.563em;
  font-weight:700;
}
</style>
