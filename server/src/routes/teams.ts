import express from 'express';
import { getAverageSalaryByTeamsDepartment } from '../controlers/teams';

const router = express.Router();

router.get('/average-salary', getAverageSalaryByTeamsDepartment);

export default router;