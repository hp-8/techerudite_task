import { Router } from 'express';
import { registerUser, loginAdmin, loginCustomer } from '../controllers/authController.js';

const router = Router();

router.post('/register/customer', registerUser('customer'));
router.post('/register/admin', registerUser('admin'));
router.post('/login/admin', loginAdmin);
router.post('/login/customer', loginCustomer);

export default router;