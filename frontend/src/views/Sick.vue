<template>
    <button @click="createSick" type="button" class="btn btn-success" id="createSick">Добавить</button>
    <table class="table">
        <thead>
            <th scope="col">#</th>
            <th scope="col">Ф.И.О.</th>
            <th scope="col">Начало</th>
            <th scope="col">Конец</th>
        </thead>
        <tbody>
            <tr v-for="(sick, id) in data.slice().reverse()" :key="id">
                <th scope="row">{{ sick.id_sick }}</th>
                <td>
                    <label v-if="!sick.isEdit">{{ sick.worker_fio }}</label>
                    <input type="text" id="worker_fio" class="form-control" maxlength="70" v-model="sick.worker_fio" list="worker" v-if="sick.isEdit">
                    <datalist class="form-select" aria-label="Default select example" id="worker" v-if="sick.isEdit" v-show="false">
                        <option v-for="(worker, id) in worker" :key="id" :value="worker.fio"> {{ worker.fio }}</option>
                    </datalist>
                </td>
                <td class="date">
                    <label v-if="!sick.isEdit">{{ sick.start_date }}</label>
                    <input type="text" id="start_date" class="form-control" maxlength="10" v-model="sick.start_date" v-if="sick.isEdit">
                </td>
                <td class="date">
                    <label v-if="!sick.isEdit">{{ sick.end_date }}</label>
                    <input type="text" id="end_date" class="form-control" maxlength="10" v-model="sick.end_date" v-if="sick.isEdit">
                </td>
                <button @click="editSick(sick)" type="button" class="btn btn-light button-edit" v-if="!sick.isEdit && !sick.end_date"><img src="../assets/pencil.svg" alt="pen-alt" width="25" /></button>
                <button @click="saveSick(sick)" type="button" class="btn btn-light button-edit" v-if="sick.isEdit"><img src="../assets/tick.svg" alt="tick-alt" width="25" /></button>
            </tr>
        </tbody>
    </table>
</template>

<script>
import api from '../../../backend/api';

export default {
    name: 'Sick',
    data() {
        return {
            data: [],
            worker: []
        }
    },
    mounted() {
        this.showSick();
    },
    methods: {
        async showSick() {
            const response = await api().get('showSick');
            this.data = response.data;
            addNew(this.data);
            const workerList = await api().get('showWorker');
            this.worker = workerList.data;
        },
        createSick() {
            this.data.push({
                id_sick: this.data.length+1,
                worker_fio: '',
                start_date: '',
                end_date: '',
                isEdit: true
            });
        },
        async saveSick(sick) {
            if (FioValidation(sick.worker_fio) && start_dateValidation(sick.start_date) && end_dateValidation(sick.end_date)) {
                sick.isEdit = false;
                if (sick.end_date.length === 0) sick.end_date = null;
                const response = await api().post('updateSick', {
                    worker_fio: sick.worker_fio,
                    start_date: sick.start_date,
                    end_date: sick.end_date,
                    id: sick.id_sick
                });
                console.log(response.data.message);
            } else {
                console.log('Неверный формат.');
            }
        },
        editSick(sick) {
            sick.isEdit = true;
        }
    }
};

const addNew = (post) => {
    const copyArr = [...post];
    copyArr.forEach(el => {
        el["isEdit"] = false;
    });
    return copyArr;
};

const FioValidation = (fio) => /^[а-яА-Я]+\s+[а-яА-Я]+\s+[а-яА-Я]+$/.test(fio);
const start_dateValidation = (start_date) => /^\d{4}-\d{2}-\d{2}$/.test(start_date);
const end_dateValidation = (end_date) => {
    let res1 = /^\d{4}-\d{2}-\d{2}$/.test(end_date);
    let res2 = end_date.length === 0;
    return res1 || res2;
};
</script>