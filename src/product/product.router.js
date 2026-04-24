const express = require('express');
const db = require('../db');
const { products } = require('../db/schema');

const router = express.Router();

router.get('/products', async (request, response) => {
    try {
        // Выбираем все записи из таблицы products
        const allProducts = await db.select().from(products);
        return response.json(allProducts);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Database error' });
    }
});

router.post('/products', async (request, response) => {
   const { body } = request;
   await db.insert(products).values(body);
   return response.sendStatus(201);
});

module.exports = router;
