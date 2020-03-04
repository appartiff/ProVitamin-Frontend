<template>
    <div class="container--social-media">
        <div class="social-box">
            <a>
                <font-awesome-icon slot="icon" :icon="['fab', 'facebook']" />
            </a>
        </div>
        <div class="social-box">
            <a>
                <font-awesome-icon slot="icon" :icon="['fab', 'instagram']" />
            </a>
        </div>
        <div class="social-box">
            <a>
                <font-awesome-icon slot="icon" :icon="['fab', 'linkedin']" />
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SocialMedia'
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/styles/variables/_variables.scss';
    .social-box{
        margin:0 0.512em;
        padding:0.8em;
        background: $color--dark-shade-lighter;
        border-radius:4px;
    }
    .social-box:hover{
        background: $color--light-accent;
    }
    .social-box> a {
        display:flex;
        align-items: center;
        width:100%;
        height:100%;

    }
    .social-box  svg {
        height: 2.441em;
        width: 2.441em;
        font-size:1em;
        color:white;
    }
    .container--social-media
    {
        display: flex; /* or inline-flex */
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        padding: 1.25em 0;
        border-bottom: 1px solid $color--light-shades;
    }

</style>
