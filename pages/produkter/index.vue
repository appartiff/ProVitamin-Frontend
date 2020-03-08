<template>
  <div class="container column desktop--max-width">
    <h1 class="title">Produkter</h1>
    <ProductList :product-collection="loadedProducts"></ProductList>
  </div>
</template>

<script>

    import ProductList from '@/components/Products/ProductList';
export default {

    components: {
        ProductList
    },
data() {
    return {
        loadedProducts: [
            {
                id: 1,
                sku: '00e8da9d',
                type: 'Vitamin',
                asin: 'B000P0J0AQ',
                pricing: 159,
                imageUrl: 'https://s3.images-iherb.com/cro/cro89104/v/3.jpg',
                details: {
                    title: 'Christopher\'s Original Formulas, Kidney Formula, 475 mg, 100 Veggie Caps'
                }
            },
            {
                id: 2,
                sku: '00e8da9d',
                type: 'Film',
                asin: 'B000P0J0AQ',
                pricing: 55,
                imageUrl: 'https://s3.images-iherb.com/cen/cen21245/v/5.jpg',
                details: {
                    title: '21st Century, Vitamin E, 180 mg (400 IU), 110 Softgels'
                }
            },
            {
                id: 3,
                sku: '00e8da9d',
                type: 'Film',
                asin: 'B000P0J0AQ',
                pricing: 55,
                imageUrl: 'https://s3.images-iherb.com/cen/cen21364/v/5.jpg',
                details: {
                    title: '21st Century, Niacin, 100 mg, 110 Tablets'
                }
            }
        ]
    }
}
}
</script>

