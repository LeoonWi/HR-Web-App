<template>
    <div class="box" id="form_dept">
        <label class="form-label" style="margin-bottom: 0;"><strong>Отдел</strong></label>
        <div id="fio" class="form">
            <label class="form-label">Наименование</label>
            <input type="text" id="name_dept" class="form-control" maxlength="45" v-model="dept.dept_name">
        </div>
        <div id="fio" class="form">
            <label class="form-label">Руководитель</label>
            <input type="text" id="name_dept" class="form-control" maxlength="70" v-model="dept.fio_chief">
        </div>
        <button @click="saveDept" type="button" class="btn btn-success" id="saveDept">Сохранить</button>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" id="deleteDept">Удалить</button>

        <!-- Всплывающее окно -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                    <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="proofDelete">
                            <label class="form-check-label" for="flexCheckDefault">Подвердить удаление</label>
                    </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Назад</button>
                <button type="button" :class="{ btn: true, 'btn-danger': true, disabled: !this.proofDelete }">Удалить</button>
              </div>
            </div>
          </div>
        </div>

    </div>
    <div class="box" id="form_post">
        <label class="form-label"><strong>Должности</strong></label><br>
        <button @click="addPost" type="button" class="btn btn-light button-plus"><img src="../../assets/plus-alt.svg" alt="plus-alt" width="30" /></button>
        <ul class="list-group" style="margin-top: 6px;">
            <li class="list-group-item" v-for="(post, id) in post" :key="id">
                <label class="name_post" v-if="!post.isEdit">{{ post.post_name }} | {{ post.salary }} руб.</label>
                <template v-if="post.isEdit">
                    <input type="text" id="post_name" class="form-control" maxlength="50" v-model="post.post_name">
                    <input type="text" id="post_salary" class="form-control" maxlength="15" v-model="post.salary">
                </template>
                <button type="button" class="btn btn-light button-minus"><img src="../../assets/minus-alt.svg" alt="minus-alt" width="30" v-if="!post.isEdit"/></button>
                <button @click="editPost(post)" type="button" class="btn btn-light button-edit"><img src="../../assets/pencil.svg" alt="pen-alt" width="30" v-if="!post.isEdit"/></button>
                <button @click="savePost(post)" type="button" class="btn btn-light button-edit"><img src="../../assets/tick.svg" alt="tick-alt" width="30" v-if="post.isEdit"/></button>
            </li>
        </ul>
    </div>
    {{ post }}
</template>

<script>
import api from '../../../../backend/api';
import router from '@/router';

export default {
    name: 'updateDept',
    data() {
        return {
            post: [],
            dept: [],
            deptKey: '',
            postKey: '',
            proofDelete: false
        }
    },
    mounted() {
        this.showPost();
        this.showDept();
    },
    methods: {
        async showPost() {
            let dept_name = this.$route.params.id;
            const response = await api().get(`showPost/${dept_name}`);
            this.post = response.data;
            this.postKey = response.data.post_name;
            addNew(this.post);
            console.log("Данные о должностях получены.");
        },
        async showDept() {
            let dept_name = this.$route.params.id;
            const response = await api().get(`showDept/${dept_name}`);
            this.dept = response.data[0];
            this.deptKey = response.data[0].dept_name;
            console.log("Данные об отделе получены.");
        },
        editPost(post) {
            post.isEdit = true;
        },
        savePost(post) {
            post.isEdit = false;
        },
        addPost() {
            let dept_name = this.$route.params.id;
            this.post.push({
                "dept_name": dept_name,
                "post_name": '',
                "salary": '',
                "isEdit": false
            });
        },
        async saveDept() {
            const response = await api().post('updateDept', {
                dept_name: this.dept.dept_name,
                fio_chief: this.dept.fio_chief,
                dept_nameOld: this.deptKey
            });
            console.log(response.data.message);
            router.push({ name: 'Dept'})
        }
    }
}
const addNew = (post) => {
    const copyArr = [...post];
    copyArr.forEach(el => {
        el["isEdit"] = false;
    });
    return copyArr;
};

</script>

<style scoped>
div.box {
    width: 50%;
    vertical-align: top;
    display: inline-block;
}

div#form_dept {
    padding-right: 5px;
}

div#form_post {
    padding-left: 5px;
}

button#deleteDept {
    margin-left: 10px;
}

.button-plus {
    margin-top: -5px;
}

.button-plus, .button-minus, .button-edit {
    padding: 0;
}

.button-minus, .button-edit {
    float: right;
}

label.name_post {
    vertical-align: middle;
}
</style>