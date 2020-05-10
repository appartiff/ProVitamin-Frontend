<template>
  <nav class="breadcrumb" aria-label="breadcrumbs" v-if="show">
    <ul>
      <li>
        <nuxt-link to="/#">
          Hjem
        </nuxt-link>
      </li>
      <li v-for="(item , index) in breadcrumbs" :key="item.message" :class="index === breadcrumbs.length-1 ? 'is-active' :''">
        <nuxt-link v-if="index !== breadcrumbs.length-1 && getLatest(item.path).length >0" :to="item.path">
          {{ getLatest(item.path) | toSpaceFromHyphen }}
        </nuxt-link>
        <a v-else> {{ getLatest(item.path) | toSpaceFromHyphen }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        filters: {
            toSpaceFromHyphen(value) {
                return value.replace(/-/g, ' ');
            }
        },
        data() {
            return {
                breadList: [],
                show: true
            }
        },
        computed: {
            ...mapGetters({
                getTitleById: 'products/titleById'
            }),
            breadcrumbs() {
                return this.breadList;
            },
            title() {
                return this.getTitleById(this.$route.params.id);
            }
        },

        watch: {
            '$route'() {
                this.updateList();
            }
        },
        mounted() {
            this.updateList();
        },
        methods: {
            updateList() {
                this.breadList = this.$route.matched;
                this.show = !(this.breadList.length === 1 && this.breadList[0].path === '');
            },
            getLatest(item) {
                const splitted = item.split('/');
                if (splitted[splitted.length - 1].includes(':id')) {
                  return this.title;
                }
              if (splitted[splitted.length - 1].includes(':brand')) {
                return this.toSpaceFromHyphen(this.$route.params.brand);
              }
                return splitted[splitted.length - 1];
            },
          toSpaceFromHyphen(value) {
            return value.replace(/-/g, ' ');
          }
        }
    }

</script>

<style lang="scss" scoped>
    @import '~/assets/styles/variables/_variables.scss';

    span {
        color: $color--dark-shade;
        user-select: none;
    }
    ul {
        padding: 10px 16px;
        list-style: none;
    }

    /* Add a color to all links inside the list */
    ul li a {
        color: #D97B69;
        text-decoration: none;
        user-select: none;
    }

    /* Add a color on mouse-over */
    ul li a:hover {
        color: #01447e;
        text-decoration: underline;
    }
</style>
