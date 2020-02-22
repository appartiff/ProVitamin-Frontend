<template>
    <div class="navigation-dropdown-content" :class="stateChanged === true ? 'show' :''">
        <a href="#">Vitaminer</a>
        <a href="#">Mineraler</a>
        <a href="#">Aminosyrer</a>
    </div>

</template>

<script>
    export default {
        props: {
            state: Boolean
        },
        computed: {
            stateChanged() {
                return this.state;
            }
        }
    }
</script>

<style scoped>
    /* Dropdown Content (Hidden by Default) */
    
    /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
    .show {
        display: block;
    }

</style>
