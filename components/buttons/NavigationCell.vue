<template>
    <button class="menu--navigation-cell text--color--light-shades">
        <span class="text--color--light-shades">{{text}}</span>
        <slot name="icon"></slot>
        
    </button>
</template>

<script>
    export default {
        props:
            {
                text: String
            }
    }
</script>
