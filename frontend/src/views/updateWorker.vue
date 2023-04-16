<template>
    <!-- data-uk-datepicker="{format:'DD.MM.YYYY'}" -->
    <table>
        <tr>
            <th>ФИО</th>
            <th>Дата рождения</th>
            <th>Пол</th>
            <th>Адрес</th>
            <th>Телефон</th>
            <th>Статус</th>
        </tr>
        <tr>
            <td>{{ this.data.fio }}</td>
            <td>{{ this.data.birthdate }}</td>
            <td>{{ this.data.gender }}</td>
            <td>{{ this.data.address }}</td>
            <td>{{ this.data.phone }}</td>
            <td>{{ this.data.status }}</td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    name: 'updateWorker',
    data() {
        return {
            data: [],
            selectId: this.$route.params.id,
        };
    },
    mounted() {
        this.WorkerList();
    },
    methods: {
        async WorkerList() {
            await axios.get('http://127.0.0.1:3000/showWorker')
            .then((response) => { this.data = response.data[this.selectId] })
            .catch((error) => { console.log(error) });
        }
    }
}
</script>

<style>

</style>