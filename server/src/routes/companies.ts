import express from 'express';

import { getCompanies, updateCompany, addCompany, deleteCompany } from '../controlers/companies';

const router = express.Router();

router.get('/', getCompanies);
router.post('/:id', updateCompany);
router.post('/', addCompany);
router.delete('/:id', deleteCompany);

export default router;
