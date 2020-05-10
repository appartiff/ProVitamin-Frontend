<template>
  <IconButton
    :text="cartTotal | toLocalePrice"
    :cart-count="getCartCount"
  >
    <font-awesome-icon slot="icon" :icon="['fas', 'shopping-basket']" />
  </IconButton>
</template>

<script>
  import { mapState, mapMutations, mapGetters } from 'vuex';
  import IconButton from '../../../components/buttons/IconButton';

  export default {
    filters: {
      toLocalePrice(x) {
        return x.toLocaleString() + ',-'
      }
    },
    components:
      {
        IconButton
      },
    computed: {
      ...mapState({
        products: state => state.products.products
      }),
      ...mapGetters({
        getCartTotal: 'cart/cartTotal',
        getCartCount: 'cart/cartCount'
      }),
      cartTotal() {
        return this.getCartTotal;
      }
    }
  }
</script>

<style scoped>
</style>
