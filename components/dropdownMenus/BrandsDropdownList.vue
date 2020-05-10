<template>
  <div>
    <nuxt-link class="dropdown-item" v-for="item in brands" :key="item.id" :to="`/merker/${toHyphenAndLowerCaseFromSpace(item)}`">{{item}}</nuxt-link>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                getBrands: 'products/uniqueBrands'
            }),
            brands() {
                return this.getBrands;
            }
        },
      methods: {
        toHyphenAndLowerCaseFromSpace(value) {
          return value.replace(/ /g, '-').toLowerCase();
        }
      }
    }
</script>

<style scoped>

</style>
