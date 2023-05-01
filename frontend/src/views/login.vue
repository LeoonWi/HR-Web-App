<template>
    <div id="login">
        <h3>Отдел кадров</h3>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Имя пользователя</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" v-model="name">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Пароль</label>
            <input type="password" class="form-control" id="exampleFormControlInput1" v-model="pass">
        </div>
        <button @click="login" type="button" class="btn btn-success" id="login">Войти</button>
    </div>
</template>

<script>

export default {
    name: "Login",
    data() {
        return {
            name: '',
            pass: '',
            isAuthorized: false
        }
    },
    methods: {
        login() {
            if (this.pass === 'root' && this.name === 'root') {
                this.isAuthorized = true;
                localStorage.setItem('password',JSON.stringify(this.isAuthorized));
                this.$emit('password-entered', this.password);
                this.$router.push('/');
                console.log(this.pass)
            } else {
                alert('Неправильный пароль')
            } 
        }
    }
}
</script>

<style scoped>
    div#login {
        width: 500px;
        margin: 0 auto;
        padding: 10px 10px;
        border: 1px solid #BCBCBC;
        border-radius: 10px;
        margin-bottom: 10px;
    }
</style>