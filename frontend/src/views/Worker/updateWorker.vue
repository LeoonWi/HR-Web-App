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
            <option selected>{{ this.data.gender }}</option>
            <option value="мужской" v-if="this.data.gender != 'мужской'">мужской</option>
            <option value="женский" v-if="this.data.gender != 'женский'">женский</option>
        </select>
    </div>
    <div id="address" class="form">
        <label class="form-label">Адрес проживания</label>
        <input type="text" id="address" class="form-control" maxlength="100" v-model="data.address">
    </div>
    <div id="phone" class="form">
        <label class="form-label">Номер телефона</label>
        <input type="text" id="phone" class="form-control" maxlength="12" v-model="data.phone">
    </div>
    <div id="fio" class="form">
        <label class="form-label">Должность</label>
        <select class="form-select" aria-label="Default select example" v-model="data.post_name">
            <option v-for="(post, id) in allPost" :key="id" :value="post.post_name">{{ post.post_name }}</option>
        </select>
    </div>
    <template v-if="data.status === 'Не работает'">
        <div id="status" class="form">
            <label class="form-label">Статус</label>
            <input type="text" id="phone" readonly class="form-control" v-model="data.status">
        </div>
        <div id="reason" class="form">
            <label class="form-label">Причина увольнения</label>
            <input type="text" id="phone" readonly class="form-control" maxlength="100" v-model="data.reason">
        </div>
    </template>
    <button @click="updateWorker" type="button" class="btn btn-success" id="saveWorker">Сохранить</button>
    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" id="dismissWorker" v-if="data.status === 'Работает'">Уволить</button>


    <!-- Всплывающее окно -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">Причина:</label>
                    <textarea class="form-control" id="reason" maxlength="12" v-model="reason"></textarea>
                </div>
                <div class="mb-3">
                    <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="proofDismiss">
                            <label class="form-check-label" for="flexCheckDefault">Подвердить увольнение</label>
                    </div>
                </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Назад</button>
            <button @click="dismissWorker" type="button" :class="{ btn: true, 'btn-danger': true, disabled: !this.proofDismiss }" data-bs-dismiss="modal">Уволить</button>
          </div>
        </div>
      </div>
    </div>
</template> 

<script>
import Api from '../../../../backend/api.js'

export default {
    name: 'updateWorker',
    data() {
        return {
            data: [],
            proofDismiss: false,
            reason: '',
            fio: '',
            allPost: []
        };
    },
    mounted() {
        this.WorkerList();
        this.PostList();
    },
    methods: {
        async WorkerList() {
            const response = await Api().get('showWorker');
            this.data = response.data[this.$route.params.id];
            this.fio = this.data.fio;
        },
        async PostList() {
            const response = await Api().get('showPost');
            this.allPost = response.data;
        },
        async updateWorker() {
            if(FioValidation(this.data.fio) && dateValidation(this.data.birthdate) && phoneValidation(this.data.phone) && addressValidation(this.data.address)) {
                const response = await Api().post('updateWorker', {
                    fio: this.data.fio,
                    birthdate: this.data.birthdate,
                    gender: this.data.gender,
                    address: this.data.address,
                    phone: this.data.phone,
                    fioKey: this.fio
                });
                console.log(response.data.message);
                window.location.reload();
            } else {
                console.log("Неверный формат.")
            }
        },
        async dismissWorker() {
            const response = await Api().post('updateWorker', {
                status: 'Не работает',
                reason: this.reason,
                fioKey: this.fio
            });
            console.log(response.data.message);
            
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;

            const responseTwo = await Api().post('updateContract', {
                fio: this.fio,
                date: today
            });
            console.log(response.data.message + '\n' + responseTwo.data.message);
            window.location.reload();
        }
    }
};
const FioValidation = (fio) => /^[а-яА-Я]+\s+[а-яА-Я]+\s+[а-яА-Я]+$/.test(fio);
const dateValidation = (date) => /^\d{4}-\d{2}-\d{2}$/.test(date);
const phoneValidation = (phone) => /^\+\d{11}$/.test(phone);
const addressValidation = (address) => /^г\.\s[а-яА-Я]+,\s[а-яА-Я]+\.\s[а-яА-Я]+,\s\W\.\s[0-9]+/.test(address);
</script>

<style scoped>
    button#dismissWorker {
        float: right;
    }
</style>