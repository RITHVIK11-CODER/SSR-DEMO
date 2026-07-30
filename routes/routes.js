const express=require("express");
const router=express.Router();

const students=require("../data/students");

router.get("/",(req,res)=>{
    res.render("index");
});

router.get("/search",(req,res)=>{
    res.render("search");
});

router.post("/result",(req,res)=>{

    const name=req.body.name.trim().toLowerCase();

    const student=students.find(
        s=>s.name.toLowerCase()===name
    );

    res.render("result",{
        student,
        students
    });

});

router.get("/students",(req,res)=>{
    res.render("students",{students});
});

module.exports=router;