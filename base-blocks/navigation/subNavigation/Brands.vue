<template>
  <div v-on-clickaway="clickedOutside">
    <NavigationCell text="Merker" :on-click="buttonClicked">
      <font-awesome-icon slot="icon" :icon="['fas', 'chevron-down']" />
    </NavigationCell>
    <NavigationDropdown :state="stateChanged">
      <BrandsDropdownList/>
    </NavigationDropdown>
  </div>
</template>
<script>
    import { mixin as clickaway } from 'vue-clickaway';
    import NavigationDropdown from '../../../components/dropdownMenus/NavigationDropdown';
    import NavigationCell from '../../../components/buttons/NavigationCell';
    import BrandsDropdownList from '@/components/dropdownMenus/BrandsDropdownList';
    export default {
        components: {
            NavigationCell,
            NavigationDropdown,
          BrandsDropdownList
        },
        mixins: [clickaway],
        data() {
            return {
                state: false
            }
        },
        computed: {
            stateChanged() {
                return this.state;
            }
        },
        methods: {
            buttonClicked() {
                this.state = !this.state;
            },
            clickedOutside() {
                this.state = false;
            }
        }
    }
</script>
