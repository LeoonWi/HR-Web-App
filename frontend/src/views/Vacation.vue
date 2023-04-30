<template>
    <button @click="createVacation" type="button" class="btn btn-success" id="createVacation">Добавить</button>
    <table class="table">
        <thead>
            <th scope="col">#</th>
            <th scope="col">Ф.И.О.</th>
            <th scope="col">Начало</th>
            <th scope="col">Конец</th>
            <th scope="col">Статус</th>
        </thead>
        <tbody>
            <tr v-for="(vac, id) in data.slice().reverse()" :key="id">
                <th scope="row">{{ vac.id_vacation }}</th>
                <td>
                    <label v-if="!vac.isEdit">{{ vac.worker_fio }}</label>
                    <input type="text" id="worker_fio" class="form-control" maxlength="70" v-model="vac.worker_fio" list="worker" v-if="vac.isEdit">
                    <datalist class="form-select" aria-label="Default select example" id="worker" v-if="vac.isEdit" v-show="false">
                        <option v-for="(worker, id) in worker" :key="id" :value="worker.fio"> {{ worker.fio }}</option>
                    </datalist>
                </td>
                <td class="date">
                    <label v-if="!vac.isEdit">{{ vac.start_date }}</label>
                    <input type="text" id="start_date" class="form-control" maxlength="10" v-model="vac.start_date" v-if="vac.isEdit">
                </td>
                <td class="date">
                    <label v-if="!vac.isEdit">{{ vac.end_date }}</label>
                    <input type="text" id="end_date" class="form-control" maxlength="10" v-model="vac.end_date" v-if="vac.isEdit">
                </td>
                <td>
                    <label v-if="!vac.isEdit">{{ vac.status }}</label>
                    <select class="form-select" aria-label="Default select example" v-model="vac.status" v-if="vac.isEdit">
                        <option value="Одобрено">Одобрено</option>
                        <option value="Отклонено">Отклонено</option>
                        <option value="На рассмотрении">На рассмотрении</option>
                    </select>
                </td>
                <button @click="editVacation(vac)" type="button" class="btn btn-light button-edit" v-if="!vac.isEdit && vac.status === 'На рассмотрении'"><img src="../assets/pencil.svg" alt="pen-alt" width="25" /></button>
                <button @click="saveVacation(vac)" type="button" class="btn btn-light button-edit" v-if="vac.isEdit"><img src="../assets/tick.svg" alt="tick-alt" width="25" /></button>
            </tr>
        </tbody>
    </table>
</template>

<script>
import api from '../../../backend/api';

export default {
    name: 'Vacation',
    data() {
        return {
            data: [],
            worker: []
        }
    },
    mounted() {
        this.showVacation();
    },
    methods: {
        async showVacation() {
            const response = await api().get('showVacation');
            this.data = response.data;
            addNew(this.data);
            const workerList = await api().get('showWorker');
            this.worker = workerList.data;
        },
        createVacation() {
            this.data.push({
                id_vacation: this.data.length+1,
                worker_fio: '',
                start_date: '',
                end_date: '',
                status: 'На рассмотрении',
                isEdit: true
            });
        },
        async saveVacation(vac) {
            if (FioValidation(vac.worker_fio) && start_dateValidation(vac.start_date) && end_dateValidation(vac.end_date)) {
                vac.isEdit = false;
                const response = await api().post('updateVacation', {
                    worker_fio: vac.worker_fio,
                    start_date: vac.start_date,
                    end_date: vac.end_date,
                    status: vac.status,
                    id: vac.id_vacation
                });
                console.log(response.data.message);
            } else {
                console.log('Неверный формат.');
            }
        },
        editVacation(vac) {
            vac.isEdit = true;
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
const end_dateValidation = (end_date) => /^\d{4}-\d{2}-\d{2}$/.test(end_date);
</script>