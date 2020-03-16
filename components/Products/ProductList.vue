<template>
  <div class="wrapper">
    <ProductPreviewCard
      v-for="product in productCollection"
      :key="product.id"
      :price="product.pricing"
      :title="product.details.title"
      :description="product.details.description"
      :thumbnail="product.imageUrl"
      :id="product.id"
    />
  </div>
</template>

<script>
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
