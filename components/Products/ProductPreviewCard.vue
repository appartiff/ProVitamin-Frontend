<template>
  <nuxt-link :to="`/produkter/${id}`">
  <article class="product-item text-center">
      <div class="image-container">
        <img class="post-thumbnail" :src="thumbnail">
      </div>
      <div class="content-container">
        <div class="description-container">
          <h2>{{ title }}</h2>
        </div>
        <div class="card-bottom">
          <div class="price-wrapper">
            <div class="price">
              <span>{{ price | toPriceFormat }}</span>
            </div>
          </div>
          <div class="button-wrapper">
            <BuyButton text="Kjøp" :rounded="true" @clicked="addToCart({price: price,quantity: 1, id: id})"/>
          </div>
        </div>
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
      methods: {
        ...mapMutations({
          addToCart: 'cart/addToCart'
        })
      }
    }
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/variables/_variables.scss';
  .product-item{
    display: flex;
    flex-direction: column;
    flex: 1 0 234px;
    border: 1px solid transparent;
    height:100%;
    background-color: white;
  }
  .product-item:hover{
    border: 1px solid $color--light-accent;
  }
a{
  height:100%;
}

  .card-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > *{
      padding-top:1em;
    }
    .price {
      line-height: 1em;
      font-weight: 700;
      font-size: 1.55em;
      text-align: left;

      span {
        color: $color--dark-accent;
      }
    }
  }

  .description-container{
    flex-grow: 1;
  }
  .image-container{
    padding:1em;
  }
  .content-container{
    padding: 0 1em 1em;
    display: flex;
    flex:1 1 auto;
    flex-direction: column
  }
.post-thumbnail {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border:0;
  height:150px;
  max-width: 200px;
}

h2 {
  font-size: 1em;
  color: $color--dark-shade;
  font-weight: 700;
  flex-grow: 1;
}


</style>
