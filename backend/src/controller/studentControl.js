const stu=require('../model/student')
let createStudent = async function(req,res){
    try {
    let data = req.body;
    let result =await stu.create(data);
    res.status(201).json({msg:"student data created",data:result})
    }catch(error){
    res.status(500).json({
        status:false,
        message: error.message,
    });
}
};
module.exports={createStudent};