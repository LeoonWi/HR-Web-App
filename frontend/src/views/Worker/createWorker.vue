<template>
    <RouterLink to="/worker" class="btn btn-outline-primary" role="button">
        Назад
    </RouterLink>
    <div id="fio" class="form">
        <label class="form-label">Фамилия / Имя / Отчество</label>
        <input type="text" id="fio" class="form-control" maxlength="70" v-model="data.fio" placeholder="Фамилия Имя Отчество">
    </div>
    <div id="birthdate" class="form">
        <label class="form-label">Дата рождения</label>
        <input type="text" id="fio" class="form-control" v-model="data.birthdate">
        <span id="passwordHelpBlock" class="form-text">Дата рождения только в формате ГГГГ-MM-ДД</span>
    </div>
    <div id="gender" class="form">
        <label class="form-label">Пол</label>
        <select class="form-select" aria-label="Default select example" v-model="data.gender">
            <option selected v-if="this.data.gender">{{ this.data.gender }}</option>
            <option value="мужской" v-if="this.data.gender != 'мужской'">мужской</option>
            <option value="женский" v-if="this.data.gender != 'женский'">женский</option>
        </select>
    </div>
    <div id="address" class="form">
        <label class="form-label">Адрес проживания</label>
        <input type="text" id="address" class="form-control" maxlength="100" v-model="data.address" placeholder="например г. Симферополь, ул. Ленина, д. 1">
    </div>
    <div id="phone" class="form">
        <label class="form-label">Номер телефона</label>
        <input type="text" id="phone" class="form-control" maxlength="12" v-model="data.phone" placeholder="например +79322223223">
    </div>
    <button @click="saveWorker" type="button" class="btn btn-success" id="saveWorker">Сохранить</button>
</template> 

<script>
import Api from '../../../../backend/api.js';
import router from '@/router';

export default {
    name: 'createWorker',
    data() {
        return {
            data: {
                fio: '',
                birthdate: '',
                gender: '',
                address: '',
                phone: ''
            }
        }
    },
    methods: {
        async saveWorker() {
            const responseOne = await Api().post('createWorker', {
                fio: this.data.fio,
                birthdate: this.data.birthdate,
                gender: this.data.gender,
                address: this.data.address,
                phone: this.data.phone
            });

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;

            const responseTwo = await Api().post('createContract', {
                fio: this.data.fio,
                date: today
            })
            console.log(responseOne.data.message + '\n' + responseTwo.data.message);
            router.push({ name: 'Worker'});
        }
    }
}
</script>

<style scoped>
    div.form {
        margin: 10px auto;
    }
</style>