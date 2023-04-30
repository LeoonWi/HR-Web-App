<template>
    <RouterLink to="/create/dept" class="btn btn-outline-success" role="button">
        Добавить
    </RouterLink>
    <table class="table">
        <thead>
            <th>Наименование</th>
            <th>Руководитель</th>
        </thead>
        <tbody>
            <tr v-for="(dept, id) in data" :key="id">
                <td>{{ dept.dept_name }}</td>
                <td>{{ dept.fio_chief }}</td>
                <router-link :to="{ name: 'updateDept', params: {id: dept.dept_name} }" class="btn btn-outline-primary" role="button">
                    Обновить
                </router-link>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Api from '../../../../backend/api';

export default {
    name: 'Dept',
    data() {
        return {
            data: []
        }
    },
    mounted() {
        this.showDept();
    },
    methods: {
        async showDept() {
            const response = await Api().get('showDept');
            this.data = response.data;
        }
    }
}

</script>