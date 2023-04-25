import express from 'express';
import { createWorker, showWorker, updateWorker } from '../database/Worker.js';
import { showContract, updateContract, createContract } from '../database/Contract.js';
import { showSick } from '../database/Sick.js';
import { showVacation } from '../database/Vacation.js';
import { showDept, showDeptById, updateDept } from '../database/Dept.js';
import { showPost } from '../database/Post.js';
import { showWorkerHasPost } from '../database/Worker_has_Post.js';

const router = express.Router();

router.get("/showWorker", showWorker); // Показать всех сотрудников
router.post("/updateWorker", updateWorker); // Обновить данные о сотруднике
router.post("/createWorker", createWorker); // Добавить нового сотрудника
router.get("/showContract", showContract); // Показать все контракты
router.post("/updateContract", updateContract); // Добавить дату об увольнении
router.post("/createContract", createContract); // Добавить дату об увольнении
router.get("/showSick", showSick); // Показать весь учет о больничных
router.get("/showVacation", showVacation); // Показать весь учет об отпусках
router.get("/showDept", showDept); // Показать все отделы
router.get("/showDept/:dept_name", showDeptById); // Показать отдел по названию
router.post("/updateDept", updateDept); // Обновить данные об отделе
router.get("/showPost/:dept_name", showPost); // Показать все должности
router.post("/showWorkerHasPost", showWorkerHasPost); // Показать все должности работника

export default router;