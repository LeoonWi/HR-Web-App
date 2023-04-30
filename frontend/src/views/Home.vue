<template>
    <div id="vacation" class="tables" @click="pushToVac">
        <h5 align="center">Отпуски</h5>
        <table class="table">
            <thead>
                <th scope="col">#</th>
                <th scope="col">Ф.И.О.</th>
                <th scope="col">Начало</th>
                <th scope="col">Конец</th>
                <th scope="col">Статус</th>
            </thead>
            <tbody>
                <tr v-for="(vac, id) in vacation.slice(0,5).reverse()" :key="id">
                    <th scope="row">{{ vac.id_vacation }}</th>
                    <td>{{ vac.worker_fio }}</td>
                    <td class="date">{{ vac.start_date }}</td>
                    <td class="date">{{ vac.end_date }}</td>
                    <td align="center">{{ vac.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="sick" class="tables" @click="pushToSick">
        <h5 align="center">Больничные</h5>
        <table class="table">
            <thead>
                <th scope="col">#</th>
                <th scope="col">Ф.И.О.</th>
                <th scope="col">Начало</th>
                <th scope="col">Конец</th>
            </thead>
            <tbody>
                <tr v-for="(sick, id) in sick.slice(0,5).reverse()" :key="id">
                    <th scope="row">{{ sick.id_sick }}</th>
                    <td>{{ sick.worker_fio }}</td>
                    <td class="date">{{ sick.start_date }}</td>
                    <td class="date">{{ sick.end_date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="worker" class="tables" @click="pushToWorker">
        <h5 align="center">Сотрудники</h5>
        <table class="table">
            <thead>
                <th scope="col">#</th>
                <th scope="col">Ф.И.О.</th>
                <th scope="col">Дата рождения</th>
                <th scope="col">Пол</th>
                <th scope="col">Адрес</th>
                <th scope="col">Телефон</th>
                <th scope="col">Статус</th>
            </thead>
            <tbody>
                <tr v-for="(worker, id) in worker.slice(0,5)" :key="id">
                    <th scope="row">{{ id }}</th>
                    <td>{{ worker.fio }}</td>
                    <td class="date">{{ worker.birthdate }}</td>
                    <td>{{ worker.gender }}</td>
                    <td>{{ worker.address }}</td>
                    <td>{{ worker.phone }}</td>
                    <td align="center">{{ worker.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="dept" class="tables" @click="pushToDept">
        <h5 align="center">Отделы</h5>
        <table class="table">
            <thead>
                <th>#</th>
                <th>Наименование</th>
                <th>Руководитель</th>
            </thead>
            <tbody>
                <tr v-for="(dept, id) in dept.slice(0,5)" :key="id">
                    <th>{{ id }}</th>
                    <td>{{ dept.dept_name }}</td>
                    <td>{{ dept.fio_chief }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="contract" class="tables" @click="pushToContract">
        <h5 align="center">Контракты</h5>
        <table class="table">
            <thead>
                <th scope="col">#</th>
                <th scope="col">Ф.И.О.</th>
                <th scope="col">Дата приема на работу</th>
            </thead>
            <tbody>
                <tr v-for="(contract, id) in contract.slice(0,5).reverse()" :key="id">
                    <template v-if="contract.date_of_dismissal == null">
                        <th>{{ contract.id_contract }}</th>
                        <td>{{ contract.worker_fio }}</td>
                        <td class=date>{{ contract.date_of_employment }}</td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import api from '../../../backend/api';
import router from '@/router';

export default {
    name: 'Home',
    data() {
        return {
            worker: [],
            contract: [],
            sick: [],
            vacation: [],
            dept: []
        }
    },
    mounted() {
        this.showSick();
        this.showVacation();
        this.showWorker();
        this.showDept();
        this.showContract();
    },
    methods: {
        async showSick() {
            const response = await api().get('showSick');
            this.sick = response.data;
        },
        async showVacation() {
            const response = await api().get('showVacation');
            this.vacation = response.data;
        },
        async showWorker() {
            const response = await api().get('showWorker');
            this.worker = response.data;
        },
        async showDept() {
            const response = await api().get('showDept');
            this.dept = response.data;
        },
        async showContract() {
            const response = await api().get('showContract');
            this.contract = response.data;
        },
        pushToVac() {
            router.push('/vacation');
        },
        pushToSick() {
            router.push('/sick');
        },
        pushToWorker() {
            router.push('/worker');
        },
        pushToDept() {
            router.push('/dept');
        },
        pushToContract() {
            router.push('/contract');
        }
    }
}
</script>

<style scoped>
    div.tables {
        border: 1px solid #BCBCBC;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    div.tables:hover {
        outline: 1px solid #9B9B9B;
        cursor: pointer;
    }
</style>