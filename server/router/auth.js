const jwt = require("jsonwebtoken");
const express = require("express");
const Signup = require("../model/userSchema");
const router = express.Router();
const bcrypt = require('bcryptjs')
const authenticate = require('../middleware/authenticate')


require('../conn');
const signup = require('../model/userSchema');

router.get("/",(req, res) => {
    res.send(`hello world router`)
});
router.post("/signup", async(req, res) => {
    const {username, email, contactnumber, password, confirmPassword} = req.body;
    if (!username || !email || !contactnumber || !password || !confirmPassword) {
        return res.status(422).json({error:"please fill the blank input"})
    }
    try {
        const userExistemail = await Signup.findOne({email:email});
        const userExistusername = await Signup.findOne({username:username});
        const userExistcontactnumber = await Signup.findOne({contactnumber:contactnumber});
        const signup = new Signup({username, email, contactnumber, password, confirmPassword});
        
        if(userExistemail){
            return res.status(422).json({error:"Email Alerady Exist"})
        }
        
        else if(userExistusername){
            return res.status(422).json({error:"Username Alerady Exist"})
        }
        
        
        else if(userExistcontactnumber){
            return res.status(422).json({error:"Contact number Alerady Exist"})
        }
        // Password matching
        
        else if(password != confirmPassword){
            return res.status(422).json({error:"Password is not match"})
        }
        else{
            await signup.save();
            res.status(201).json({massege:"user registered successfully"})
        }
        
        
    } catch (err) {
        console.log(err);
    }
});

// login page

router.post("/signin", async(req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({error:"please fill the blank input1"})
        }
        
        //email matching
        
        const userlogin = await Signup.findOne({email:email});
        
        if (userlogin) {

            const userIsmatch = await bcrypt.compare(password, userlogin.password)
            const token = await userlogin.generateAuthToken();
        console.log(token);
        //25892000000
        res.cookie("jwtoken", token,{
            expires: new Date(Date.now() + 25892000000),
            httpOnly:true
        })
        
        if (!userIsmatch) {
            res.status(400).json({error: "Invalide credentials"})
        }
        else{
            res.json({message: "user login successfully"})
        }
    }
    else{
        res.status(400).json({error: "Invalide credentials"})
    }
    

   } catch (err) {
       console.log(err)
    }
})

router.get('/profile', authenticate , (req, res) =>{
    res.send(req.rootUser)
})
router.get('/userdata', authenticate , (req, res) =>{
    res.send(req.rootUser)
})


router.get('/logout', (req, res) =>{
    console.log("logout page")
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send("user loged out")
})
module.exports = router;
// router.post("/signup",(req, res) => {
//     const {username, email, contactnumber, password, confirmPassword} = req.body;
//     if (!username || !email || !contactnumber || !password || !confirmPassword) {
//         return res.status(422).json({error:"please fill the blank input"})
//     }
//     Signup.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email Alerady Exist"})
//         }
//         const signup = new Signup({username, email, contactnumber, password, confirmPassword});

//         signup.save().then(()=>{
//             res.status(201).json({massege:"user registered successfully"})
//         }).catch((err)=>res.status(500).json({error:"failed to registered"}))
//     }).catch((err)=>{console.log(err);})
// });