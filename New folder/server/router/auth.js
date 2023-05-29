const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const Register = require('../model/userSchema');
const bcrypt = require("bcryptjs");

// router.get('/', (req, res) =>{
//     res.send(`Hello server`);
// })

//register page
router.post('/register', async (req, res) =>{
    const { fullname, username, email, mobile, gender, password, cpassword } =
    req.body;
  if (!fullname || !username || !email || !mobile || !gender || !password || !cpassword) {
    return res.status(421).json({ error: "please fill the blank input" });
  }
  try {
    const userExistemail = await Register.findOne({ email: email });
    const userExistusername = await Register.findOne({ username: username });
    const userExistmobile = await Register.findOne({ mobile: mobile, });
    const register = new Register({
      fullname,
      username,
      email,
      mobile,
      gender,
      password,
      cpassword,
    });

    if (userExistemail) {
      return res.status(422).json({ error: "Email Alerady Exist" });
    } else if (userExistusername) {
      return res.status(423).send({ error: "Username Alerady Exist" });
    } else if (userExistmobile) {
      return res.status(424).json({ error: "Contact number Alerady Exist" });
    } else if (password != cpassword) {
      return res.status(425).json({ error: "Password is not match" });
    } else {
      await register.save();
      console.log(await register.save())
      res.status(201).json({ massege: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
})

// login page
router.post('/login', async (req, res) =>{
    try {
        const { email, password, mobile, username } = req.body;
        if ((!email && mobile && username) || !password) {
          return res.status(400).json({ error: "please fill the blank input1" });
        }
    
        const userloginEmail = await Register.findOne({ email: email });
        const userloginMobile = await Register.findOne({ mobile:mobile });
        const userloginUsername = await Register.findOne({ username:username });
        if (userloginEmail) {
            
          const userIsmatch = await bcrypt.compare(password, userloginEmail.password);
    
          if (!userIsmatch) {
            res.status(400).json({ error: "Invalide credential" });
          } else {
            const token = await userloginEmail.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
              expires: new Date(Date.now() + 604800),
              httpOnly: true,
            });
            res.json({ message: "user login successfully" });
          }
        } 
          else if(userloginUsername){
                  console.log("register with username")
          }
          else if(userloginMobile){
            console.log("register with mobile")
  
          }
        else {
          res.status(400).json({ error: "Invalide credentials" });
        }
      } catch (err) {
        console.log(err);
      }
})

module.exports = router;