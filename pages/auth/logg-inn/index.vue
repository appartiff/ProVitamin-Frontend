<template>
  <FormContainer>
    <h2 class="title">
      Logg inn
    </h2>
    <div class="field">
      <label class="label">E-mail</label>
      <div class="control has-icons-left">
        <input class="input is-success" type="text" placeholder="email">
        <span class="icon is-small is-left">
          <font-awesome-icon :icon="['fas', 'user']" />
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Passord</label>
      <div class="control has-icons-left">
        <input class="input is-success" type="password" placeholder="passord">
        <span class="icon is-small is-left">
          <font-awesome-icon :icon="['fas', 'key']" />
        </span>
      </div>
    </div>
    <div class="field">
      <p class="control">
        <a class="button is-primary">
          Logg inn
        </a>
      </p>
      <p class="control">
        <nuxt-link :to="'/auth/registrer'" class="button is-outlined ">
          Registrer ny bruker
        </nuxt-link>
      </p>
    </div>
  </FormContainer>



</template>

<script>
  import FormContainer from '@/components/layout/FormContainer';
    export default {
        name: 'Login',
      components: {
          FormContainer
      }
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/styles/variables/_variables.scss';

    @media #{$mobile} {
        .button {
            width:100%;
            display:flex;
        }
    }
</style>