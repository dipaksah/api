const express=require('express');
const category=require('../Model/category');
const router=express.Router();

router.route('/')
.get((req,res,next)=>{
    category.find()
    .then((cate)=>{
        res.json(cate);
    }).catch((err)=>next(err));
})

.post((req,res,next)=>{
    category.create(req.body)
    .then((cate)=>{
        res.json(cate);
    }).catch(next);
})

module.exports=router;