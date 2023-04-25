<template>
  <nav class="navbar bg-primary navbar-dark navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Отдел кадров</RouterLink>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">    <!-- Добавить класс active если сссылка активна или disable если недоступна-->
          <RouterLink to="/worker" class="nav-link">Сотрудники</RouterLink>
          <RouterLink to="/contract" class="nav-link">Контракты</RouterLink>
          <RouterLink to="/dept" class="nav-link">Отделы</RouterLink>
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
    width: 1280px;
    margin: 10px auto;
  }

  div.form {
    margin: 10px auto;
  }

  .router-button {
    width: 100%;
  }

  div.flag {
    float: right;
  }
</style>
