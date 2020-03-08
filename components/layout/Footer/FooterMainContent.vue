<template>
  <div class="main-content">
    <div class="main-content--container desktop--max-width">
      <article>
        <h3>Kontakt</h3>
        <ul>
          <li>E-mail:  <span>support@topkek.as</span></li>
          <li>Telefon: <span>93 27 41 25</span></li>
        </ul>
      </article>
      <article>
        <h3>Informasjon</h3>
        <ul>
          <li>
            <nuxt-link to="/informasjon/retur">
              Retur
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/informasjon/reklamasjon">
              Reklamasjon
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/informasjon/levering">
              Levering
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/informasjon/kjøpsbetingelser">
              Kjøpsbetingelser
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/informasjon/personvern">
              Personvern
            </nuxt-link>
          </li>
        </ul>
      </article>
      <article>
        <h3>Kundeservice</h3>
        <ul>
          <li>
            <nuxt-link to="/kundeservice/spørsmål-og-svar">
              Spørsmål & svar
            </nuxt-link>
          </li>
        </ul>
      </article>
      <article>
        <img class="logo" src="~/assets/images/Logo.svg">
      </article>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import '~/assets/styles/variables/_variables.scss';
    .main-content{
        justify-content: center;
        align-items: center;
        display: flex;
        padding-bottom:1em;
    }

    .main-content--container{
        display: flex;
        flex-wrap:wrap;
        width:100%;
        justify-content: space-evenly;
        margin: 0 1em;
    }
    @media #{$mobile} {
        .main-content--container{
           justify-content: normal!important;
            flex-direction: column;
        }
    }

    article{
        margin: 0 0.512em;
        padding: 1.25em 0;
    }
    h3{
        text-transform: uppercase;
        color:$color--light-shades;
        margin-bottom: 1.25rem;
    }
    ul{
    }
    li{
        color:white;
        font-size: 1.25em;
        padding: 3px 0;
    }
    li span{
        color:$color--main-brand;
    }
    li span:hover{
        color:$color--light-shades;
    }

    li a{
      color:$color--main-brand;
      text-decoration: none;
    }
    li a:hover{
      color:$color--light-shades;
    }
</style>
