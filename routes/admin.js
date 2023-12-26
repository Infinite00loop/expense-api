const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/get-expense', adminController.getExpense);
router.post('/insert-expense', adminController.insertExpense);
router.delete('/delete-expense/:description', adminController.deleteExpense);

module.exports = router;