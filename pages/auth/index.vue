<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Logg inn
      </h1>
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
      <div class="control">
        <button class="button is-primary">
          Logg inn
        </button>
        <button class="button">
          Registrer ny bruker
        </button>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'Index'
    }
</script>

<style scoped>
    .container  {
        margin: auto;
        max-width: 740px;
    }
    .section {
        background: white;
    }
</style>