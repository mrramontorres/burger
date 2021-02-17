const express = require('express');

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll((data) => {
      const hbsObject = {
        burger: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    cat.insertOne(['name', 'devoured'], [req.body.name, req.body.devoured], (result) => {
        // Send back the ID of the new burger added
        res.json({ id: result.insertId });
    });
});