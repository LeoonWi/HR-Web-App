import express from 'express';
import { createWorker, showWorker, updateWorker } from '../database/Worker.js';
import { showContract, updateContract, createContract } from '../database/Contract.js';
import { showSick, updateSick } from '../database/Sick.js';
import { showVacation, updateVacation } from '../database/Vacation.js';
import { showDept, showDeptById, updateDept, delDept, addDept } from '../database/Dept.js';
import { showAllPost, showPost, addPost, updatePost, delPost } from '../database/Post.js';

const router = express.Router();

router.get("/showWorker", showWorker); // Показать всех сотрудников
router.post("/updateWorker", updateWorker); // Обновить данные о сотруднике
router.post("/createWorker", createWorker); // Добавить нового сотрудника
router.get("/showContract", showContract); // Показать все контракты
router.post("/updateContract", updateContract); // Добавить дату об увольнении
router.post("/createContract", createContract); // Добавить дату об увольнении
router.get("/showSick", showSick); // Показать весь учет о больничных
router.post("/updateSick", updateSick); // Добавить или Изменить запись о больничном
router.get("/showVacation", showVacation); // Показать весь учет об отпусках
router.post("/updateVacation", updateVacation); // Добавить или Изменить запись об отпуске
router.get("/showDept", showDept); // Показать все отделы
router.get("/showDept/:dept_name", showDeptById); // Показать отдел по названию
router.post("/updateDept", updateDept); // Обновить данные об отделе
router.post("/delDept", delDept); // Удалить отдел
router.post("/addDept", addDept); // Добавить отдел
router.get("/showPost", showAllPost); // Показать все должности
router.get("/showPost/:dept_name", showPost); // Показать все должности в отделе
router.post("/addPost", addPost); // Добавить должность
router.post("/updatePost", updatePost); // Обновить должность
router.post("/delPost", delPost); // Удалить должность

export default router;