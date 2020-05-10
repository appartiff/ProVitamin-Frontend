<template>
  <footer>
    <SocialMedia />
    <FooterMainContent />
  </footer>
</template>

<script>
  import SocialMedia from '@/base-blocks/Footer/SocialMedia';
  import FooterMainContent from '@/base-blocks/Footer/FooterMainContent';
    export default {
      components: {
        SocialMedia,
        FooterMainContent
      }

    }
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/variables/_variables.scss';
    footer {
        background-color: $color--dark-shade;
    }

</style>
