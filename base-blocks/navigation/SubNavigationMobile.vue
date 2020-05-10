<template>
    <div class="navbar">
        <IconButton text="Produkter">
            <font-awesome-icon slot="icon" :icon="['fas', 'user']"/>
        </IconButton>
        <Basket></Basket>
        <IconButton @clicked="focusSearchBar" :method="focusSearchBar" text="Søk">
            <font-awesome-icon slot="icon"  :icon="['fas', 'search']" />
        </IconButton>
    </div>
</template>

<script>
    import IconButton from '@/components/buttons/IconButton';
    import Basket from '@/base-blocks/navigation/mainNavigation/Basket';
    export default {
        name: 'SubNavigationMobile',
        components: {
            IconButton,
            Basket
        },
        methods: {
            focusSearchBar() {
                const elem = document.getElementById('search-input');
                window.scrollTo(0, 0);
                elem.focus();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '~/assets/styles/variables/_variables.scss';
    .navbar {
        background-color: $color--dark-shade;
        position: fixed;
        display: flex;
        border-top: 1px solid $color--dark-shade-lighter;
        bottom: 0;
        width: 100%;
        overflow: hidden;
        padding: 0.5em 0;
    }
    .navbar >* {
        width:25%;
    }

</style>