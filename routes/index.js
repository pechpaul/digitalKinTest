const express = require("express");
const router=express.Router();

router.use('/agents', require('./agents'));

router.use('/conversations', require('./conversations'));

module.exports = router;