<template>
    <RouterLink to="/dept" class="btn btn-outline-primary" role="button">
        Назад
    </RouterLink>
    <div id="dept_name" class="form">
        <label class="form-label">Наименование</label>
        <input type="text" id="fio" class="form-control" maxlength="45" v-model="data.dept_name" placeholder="Название">
    </div>
    <div id="fio" class="form">
        <label class="form-label">Руководитель</label>
        <input type="text" id="fio" class="form-control" maxlength="70" v-model="data.fio_chief" placeholder="Фамилия Имя Отчество">
    </div>
    <button @click="addDept" type="button" class="btn btn-success" id="saveWorker">Сохранить</button>
</template>

<script>
import router from '@/router';
import Api from '../../../../backend/api.js';

export default {
    name: 'createDept',
    data() {
        return {
            data:  {
                dept_name: '',
                fio_chief: ''
            }
        }
    },
    methods: {
        async addDept() {
            const response = await Api().post('addDept', {
                dept_name: this.data.dept_name,
                fio_chief: this.data.fio_chief
            });
            console.log(response.data.message);
            router.push({ name: 'Dept'});
        }
    }
}
</script>