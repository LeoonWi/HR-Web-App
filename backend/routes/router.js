import express from 'express';
import { showWorker } from '../database/Worker.js';

const router = express.Router();

router.get("/showWorker", showWorker); // Показать всех сотрудников

export default router;