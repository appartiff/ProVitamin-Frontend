<template>
    <button
            @click="onClick"
            class="navigation-cell">
        <span>{{text}}</span>
        <slot name="icon"></slot>
    </button>
</template>
<script>
    export default {
        props:
            {
                text: String,
                onClick: {
                    type: Function,
                    required: true
                }
            }
    }
</script>
<style scoped lang="scss">
    @import '~/assets/styles/variables/_colors.scss';
    @import '~/assets/styles/variables/_fonts.scss';
    
    .navigation-cell {
        background-color: transparent;
        padding: 0.8em 1em;
        text-transform: uppercase;
        color:  $color--light-shades-lighter;
        border: 0;
    }
    span {
        color:$color--light-shades;
    }
    svg{
        color:$color--light-shades;
    }
    .navigation-cell:hover {
        background-color: $color--light-shades-lighter;

    }
    .navigation-cell--active {
        background-color: $color--light-shades-lighter;
    }
</style>
