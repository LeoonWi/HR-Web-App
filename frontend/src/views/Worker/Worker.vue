<template>
    <RouterLink to="/create/worker" class="btn btn-outline-success" role="button">
        Добавить
    </RouterLink>
    <div class="search-input">
        <input v-on:keyup.enter="search" class="form-control search" type="text" aria-label="search" placeholder="Введите поисковой запрос" v-model="searchStr">
        <button @click="search" type="button" class="btn btn-light button-edit search"><img src="../../assets/search.svg" alt="search-alt" width="20" /></button>
    </div>
    <div class="form-check form-switch flag">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked v-model="flag">
      <label class="form-check-label" for="flexSwitchCheckChecked">Показать текущих сотрудников</label>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Ф.И.О.</th>
                <th scope="col">Дата рождения</th>
                <th scope="col">Пол</th>
                <th scope="col">Адрес</th>
                <th scope="col">Телефон</th>
                <th scope="col" v-if="!flag">Статус</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(worker, id) in data" :key="id">
                <template v-if="flag && worker.status == 'Работает'">
                    <td>{{ worker.fio }}</td>
                    <td class="date">{{ worker.birthdate }}</td>
                    <td>{{ worker.gender }}</td>
                    <td>{{ worker.address }}</td>
                    <td>{{ worker.phone }}</td>
                    <router-link :to="{ name: 'updateWorker', params: {id: id} }" class="btn btn-outline-primary router-button" role="button">
                        Обновить
                    </router-link>
                </template>
                <template v-if="!flag && worker.status == 'Не работает'">
                    <td>{{ worker.fio }}</td>
                    <td class=date>{{ worker.birthdate }}</td>
                    <td>{{ worker.gender }}</td>
                    <td>{{ worker.address }}</td>
                    <td>{{ worker.phone }}</td>
                    <td>{{ worker.status }}</td>
                    <router-link :to="{ name: 'updateWorker', params: {id: id} }" class="btn btn-outline-primary router-button" role="button">
                        Обновить
                    </router-link>
                </template>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Api from '../../../../backend/api.js';

export default {
    name: 'Worker',
    data() {
        return {
            data: [],
            flag: true,
            searchStr: ''
        };
    },
    mounted() {
        this.WorkerList();
    },
    methods: {
        async WorkerList() {
            const response = await Api().get('showWorker');
            this.data = response.data;
        },
        async search() {
            const response = await Api().post('searchWorker', {
                str: this.searchStr
            });
            this.data = response.data;
        }
    }
}
</script>

<style scoped>

div.search-input {
    margin-left: 270px;
}

</style>