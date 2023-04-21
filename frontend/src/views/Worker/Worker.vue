<template>
    <RouterLink to="/create/worker" class="btn btn-outline-success" role="button">
        Добавить
    </RouterLink>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Ф.И.О.</th>
                <th scope="col">Дата рождения</th>
                <th scope="col">Пол</th>
                <th scope="col">Адрес</th>
                <th scope="col">Телефон</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(worker, id) in data" :key="id">
                <td>{{ worker.fio }}</td>
                <td>{{ worker.birthdate }}</td>
                <td>{{ worker.gender }}</td>
                <td>{{ worker.address }}</td>
                <td>{{ worker.phone }}</td>
                <router-link :to="{ name: 'updateWorker', params: {id: id} }"
                class="btn btn-outline-primary" role="button">Обновить</router-link>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Worker',
    data() {
        return {
            data: [],
        };
    },
    mounted() {
        this.WorkerList();
    },
    methods: {
        async WorkerList() {
            await axios.get('http://127.0.0.1:3000/showWorker')
            .then((response) => { this.data = response.data })
            .catch((error) => { console.log(error) });
        }
    }
}
</script>