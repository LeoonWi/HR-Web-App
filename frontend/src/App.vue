<template>
  <nav class="navbar bg-primary navbar-dark navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink to="/worker" class="navbar-brand">Отдел кадров</RouterLink>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">    <!-- Добавить класс active если сссылка активна или disable если недоступна-->
          <RouterLink to="/worker" class="nav-link">Worker</RouterLink>
          <RouterLink to="/contract" class="nav-link">Contract</RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <div id="body-router">
    <RouterView />
  </div>
</template>

<script>
//import { RouterView } from 'vue-router';



export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
  div#body-router {
    margin: 10px 10%;
  }

  table td, table th {
    border: 1px solid black;
  }
</style>
