<template>
  <div v-if="show" class="flex-container breadcrumb desktop--max-width">
    <ul>
      <li>
        <nuxt-link to="/">
          Hjem
        </nuxt-link>
      </li>
      <li v-for="(item , index) in breadcrumbs" :key="item.message">
        <nuxt-link v-if="index !== breadcrumbs.length-1 && getLatest(item.path).length >0" :to="item.path">
          {{ getLatest(item.path) | toSpaceFromHyphen }}
        </nuxt-link>
        <span v-else> {{ getLatest(item.path) | toSpaceFromHyphen }}</span>
      </li>
    </ul>
  </div>
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
                if (splitted[splitted.length - 1].includes(':')) {
                  return this.title;
                }
                return splitted[splitted.length - 1];
            },
            occurrences(string, subString, allowOverlapping) {
                string += '';
                subString += '';
                if (subString.length <= 0) {
                    return (string.length + 1);
                }
                let n = 0;
                let pos = 0;
                const step = allowOverlapping ? 1 : subString.length;
                while (true) {
                    pos = string.indexOf(subString, pos);
                    if (pos >= 0) {
                        ++n;
                        pos += step;
                    } else {
                        break;
                    }
                }
                return n;
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

    .breadcrumb {
        margin: 0 auto;
    }

    ul {
        padding: 10px 16px;
        list-style: none;
    }

    /* Display list items side by side */
    ul li {
        display: inline;
        font-size: 1em;
        text-transform: capitalize;
    }

    /* Add a slash symbol (/) before/behind each list item */
    ul li + li:before {
        padding: 8px;
        color: black;
        content: "/\00a0";
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
