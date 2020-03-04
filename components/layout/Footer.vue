<template>
  <footer>
    <SocialMedia />
    <FooterMainContent />
  </footer>
</template>

<script>
  import SocialMedia from '~/components/layout/Footer/SocialMedia';
  import FooterMainContent from '~/components/layout/Footer/FooterMainContent';
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
