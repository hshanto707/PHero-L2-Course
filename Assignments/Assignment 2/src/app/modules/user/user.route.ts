import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.get('/', UserControllers.getUsers);

router.get('/:userId', UserControllers.getUserById);

router.post('/', UserControllers.createUser);

router.put('/:userId', UserControllers.updateUser);

router.delete('/:userId', UserControllers.deleteUser);

// router.put('/:userId/orders', UserControllers.addNewProductInOrder);

// router.get('/:userId/orders', UserControllers.getAllOrdersForUser);

// router.get('/:userId/orders/total-price', UserControllers.calculateTotalPrice);

export const UserRoutes = router;
