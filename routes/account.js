const express=require('express')
const router=express.Router()
const Account=require('../module/account')

router.get('/',async(req,res)=>{
try {
    const account = await Account.find()
    res.json(account)
} catch (err) {
    res.send(err)
}
})
router.post('/',async(req,res)=>{
const account=new Account({
    firstname:req.body.firstname,
        surename:req.body.surename,
        gender:req.body.gender,
        dateofbirth:req.body.dateofbirth,
        password:req.body.password,
        phonenumber:req.body.phonenumber,
        email:req.body.email
})
try {
    const respond=await account.save()
    res.json(respond)
} catch (err) {
    res.send(err)
}
})
router.put('/:id',async(req,res)=>{
    try{
    const account=await Account.findById(req.params.id)
        account.firstname=req.body.firstname,
        account.surename=req.body.surename,
        account.gender=req.body.gender,
        account.dateofbirth=req.body.dateofbirth,
        account.password=req.body.password,
        account.phonenumber=req.body.phonenumber,
        account.email=req.body.email

        const response=await account.save()
        res.json(response)
    } catch (error) {
       res.send(err) 
    }
})
router.delete('/id',async(res,req)=>{
        try {
            const account=await Account.findById(req.params.id)
            const response=await account.remove()
            res.json(response)
        } catch (error) {
            res.json(err)
        }
})
router.get('/:id',async(res,req)=>{
    try {
        const account=await Account.findById(req.params.id)
        res.json(account)
    } catch (error) {
        res.send("Err"+err)
    }
})
module.exports=router