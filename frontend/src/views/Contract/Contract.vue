<template>
    <div class="search-input">
        <input v-on:keyup.enter="search" class="form-control search" type="text" aria-label="search" placeholder="Введите поисковой запрос" v-model="searchStr">
        <button @click="search" type="button" class="btn btn-light button-edit search"><img src="../../assets/search.svg" alt="search-alt" width="20" /></button>
    </div>
    <div class="form-check form-switch flag">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked v-model="flagWork">
      <label class="form-check-label" for="flexSwitchCheckChecked">Показать текущие контракты</label>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Ф.И.О.</th>
                <th scope="col">Дата приема на работу</th>
                <th scope="col" v-if="!flagWork">Дата увольнения</th>
            </tr>
        </thead>
        <tbody>
            <template v-if="flagWork">
                <tr v-for="(contract, id) in data" :key="id">
                    <template v-if="contract.date_of_dismissal == null">
                        <th>{{ contract.id_contract }}</th>
                        <td>{{ contract.worker_fio }}</td>
                        <td class=date>{{ contract.date_of_employment }}</td>
                    </template>
                </tr>
            </template>
            <template v-if="!flagWork">
                <tr v-for="(contract, id) in data" :key="id">
                    <template v-if="contract.date_of_dismissal != null">
                        <th>{{ contract.id_contract }}</th>
                        <td>{{ contract.worker_fio }}</td>
                        <td class="date">{{ contract.date_of_employment }}</td>
                        <td class="date">{{ contract.date_of_dismissal }}</td>
                    </template>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script>
import Api from '../../../../backend/api.js';

export default {
    name: 'contract',
    data() {
        return {
            data: [],
            flagWork: true,
            searchStr: ''
        }
    },
    mounted() {
        this.showContract();
    },
    methods: {
        async showContract() {
            const response = await Api().get('showContract');
            this.data = response.data;
        },
        async search() {
            const response = await Api().post('searchContract', {
                str: this.searchStr
            });
            this.data = response.data;
        }
    }
}

</script>

<style scoped>
div.search-input {
    margin-left: 400px;
}
</style>