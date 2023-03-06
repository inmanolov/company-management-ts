import express from 'express';
import { getBulgarianEmployees, getAllEmployeesInTeam, getEmployeesWithSixMonthsInTheCompany, getAllEmployees, deleteEmployee, updateEmployee, createEmployee } from '../controlers/employees';

const router = express.Router();

router.get('/bulgarian', getBulgarianEmployees);
router.get('/teams', getAllEmployeesInTeam)
router.get('/over-six-months', getEmployeesWithSixMonthsInTheCompany);
router.get('/', getAllEmployees);
router.delete('/:id', deleteEmployee);
router.put('/:id', updateEmployee);
router.post('/create', createEmployee);

export default router;