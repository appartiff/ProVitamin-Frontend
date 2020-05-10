<template>
  <div />
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: 'OnWindowResizeService',
        mounted() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            ...mapMutations({
                changeMobileState: 'layout/changeMobileState'
            }),
            handleResize() {
                this.changeMobileState(window.innerWidth < 990);
            }

        }

    }
</script>

<style scoped>

</style>
