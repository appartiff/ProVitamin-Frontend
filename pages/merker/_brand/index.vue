<template>
    <div class="container desktop--max-width">
        <ProductList :product-collection="products"></ProductList>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import ProductList from '@/components/Products/ProductList';
    export default {
        name: 'index',
        components: {
          ProductList
        },
        computed: {
            ...mapGetters({
                getProductsByBrand: 'products/productsByBrand'
            }),
            products() {
                return this.getProductsByBrand(this.toSpaceAndHyphen(this.$route.params.brand));
            }
        },
        methods: {
            toSpaceAndHyphen(value) {
                return value.replace(/-/g, ' ');
            }
        }
    }
</script>

<style scoped>

</style>
