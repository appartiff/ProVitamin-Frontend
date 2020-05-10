<template>
  <div class="wrapper">
      <ProductPreviewCard
        v-for="product in productCollection"
        :id="product.id"
        :key="product.id"
        :price="product.pricing"
        :title="product.details.title"
        :description="product.details.description"
        :thumbnail="product.imageUrl"
      />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
    import ProductPreviewCard from '@/components/Products/ProductPreviewCard';

    export default {
        name: 'ProductList',
        components: {
            ProductPreviewCard

        },
        props: {
            productCollection: {
                type: Array,
                required: true
            }
        },
      computed: {
        ...mapState('layout', ['mobile'])
      }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
      align-items: center;
      width:100%;
      grid-gap: 10px;
      padding: 1em;
      justify-content: center;
    }
</style>
