
const express = require('express');
const htmlController = require('../controller/htmlController');
const router = express.Router();
const app = express();

router.route('/').get(htmlController.home);
module.exports = router;