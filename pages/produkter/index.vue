<template>
  <div class="container column desktop--max-width">
    <h1 class="title">Produkter</h1>
    <ProductList :product-collection="products"></ProductList>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
import ProductList from '@/components/Products/ProductList';
export default {

    components: {
        ProductList
    },
  computed: {
    ...mapState({
      products: state => state.products.products
    })
  },
  asyncData() {
  return {
}
  },
data() {

}
}
</script>

