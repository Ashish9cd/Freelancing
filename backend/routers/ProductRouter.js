const express = require('express');
const router = express.Router();


router.get('/add',(req, res)=>{
    res.send(' response From product add')
});

//get all
 
router.get('/getall',(req,res)=>{
    res.send('response from product getall')
});

//get by id
router.get('/getbyid',(req,res)=>{
    res.send('response from product getbyid')
});

module.exports = router;