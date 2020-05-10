<template>
    <nuxt-link :to="`/produkter/${id}`">
        <article class="product-item">
        <div class="button-wrapper">
            <BuyButton text="Kjøp" rounded="true" />
        </div>
        </article>
    </nuxt-link>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import BuyButton from '@/components/buttons/FlatButton';

    export default {
        components: {
            BuyButton
        },
        filters: {
            toPriceFormat(value) {
                return value + ',-';
            }
        },
        props: {
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            description: {
                type: String,
                required: false
            },
            id: {
                type: Number,
                required: true
            },
            thumbnail: String
        },
        computed: {
            ...mapMutations({
                addToCart: 'cart/addToCart'
            })
        }
    }
</script>

<style scoped>
    .product-item{
        display: flex;
        flex-direction: column;
        flex: 1 0 100%;
        border: 1px solid transparent;
        height:100%;
        background-color: white;
    }
</style>