import express from 'express';
import { showWorker, updateWorker } from '../database/Worker.js';
import { showContract } from '../database/Contract.js';
import { showSick } from '../database/Sick.js';
import { showVacation } from '../database/Vacation.js';
import { showDept } from '../database/Dept.js';
import { showPost } from '../database/Post.js';
import { showWorkerHasPost } from '../database/Worker_has_Post.js';

const router = express.Router();

router.get("/showWorker", showWorker); // Показать всех сотрудников
router.post("/updateWorker", updateWorker); // Обновить данные о сотруднике
router.get("/showContract", showContract); // Показать все контракты
router.get("/showSick", showSick); // Показать весь учет о больничных
router.get("/showVacation", showVacation); // Показать весь учет об отпусках
router.get("/showDept", showDept); // Показать все отделы
router.get("/showDept", showPost); // Показать все должности
router.get("/showWorkerHasPost", showWorkerHasPost); // Показать все должности работника

export default router;