const express=require('express')
const{createStudent}=require('../controller/studentControl')
const router= express.Router()

router.post('/student',createStudent)
router.get('/', ()=>{
    console.log("hello");
})
module.exports=router;