import { Router } from 'express';
import { getCompanies, saveCompany } from '../controllers/CompanyController';

const router = Router();
router.get('/get', getCompanies);
router.post('/save', saveCompany);

export default router;
