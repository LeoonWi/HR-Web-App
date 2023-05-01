<template>
  <nav class="navbar bg-primary navbar-dark navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Отдел кадров</RouterLink>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">    <!-- Добавить класс active если сссылка активна или disable если недоступна-->
          <RouterLink to="/worker" class="nav-link">Сотрудники</RouterLink>
          <RouterLink to="/dept" class="nav-link">Отделы</RouterLink>
          <RouterLink to="/contract" class="nav-link">Контракты</RouterLink>
          <RouterLink to="/sick" class="nav-link">Больничные</RouterLink>
          <RouterLink to="/vacation" class="nav-link">Отпускные</RouterLink>
        </div>
      </div>
      <a @click="logout" class="nav-link" id="ref" style="margin-right: 10px;">Выйти</a>
      <RouterLink to="/reference" class="nav-link" id="ref">Справка</RouterLink>
    </div>
  </nav>

  <div id="body-router">
    <RouterView />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
        
      }
  },
  methods: {
    logout() {
      localStorage.removeItem('password');
      this.$router.push("/login");
    },
  }
}
</script>

<style>
  nav.navbar {
    position: fixed;
    width: 100%;
  }

  div#body-router {
    width: 1280px;
    margin: auto;
    padding-top: 65px;
  }

  div.search-input {
    display: inline-block;
    vertical-align: top;
    margin-left: 250px;
  }

  input.search {
    display: inline-block;
    width: 500px;
    vertical-align: top;
  }

  button.search {
    vertical-align: top;
    margin-left: 5px;
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

  thead, tr th, td.date {
    text-align: center;
  }

  div.navbar-nav {
    width: 100%;
  }

  a#ref {
    color: #92befe;
  }

  a#ref:hover {
    color: #bad4fc;
  }
</style>
