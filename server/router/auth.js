const jwt = require("jsonwebtoken");
const express = require("express");
const Signup = require("../model/userSchema");
const Otp = require("../model/otp");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
// const nodemailer = require("nodemailer");
// const { sendverificationEmail } = require("../config/sendEmail");

require("../conn");
const signup = require("../model/userSchema");
const { eventNames, updateMany } = require("../model/otp");
const { config } = require("dotenv");

//signup page

router.post("/signup", async (req, res) => {
  const { username, email, contactnumber, password, confirmPassword } =
    req.body;
  if (!username || !email || !contactnumber || !password || !confirmPassword) {
    return res.status(422).json({ error: "please fill the blank input" });
  }
  try {
    const userExistemail = await Signup.findOne({ email: email });
    const userExistusername = await Signup.findOne({ username: username });
    const userExistcontactnumber = await Signup.findOne({
      contactnumber: contactnumber,
    });
    const signup = new Signup({
      username,
      email,
      contactnumber,
      password,
      confirmPassword,
    });

    if (userExistemail) {
      return res.status(422).json({ error: "Email Alerady Exist" });
    } else if (userExistusername) {
      return res.status(422).json({ error: "Username Alerady Exist" });
    } else if (userExistcontactnumber) {
      return res.status(422).json({ error: "Contact number Alerady Exist" });
    } else if (password != confirmPassword) {
      return res.status(422).json({ error: "Password is not match" });
    } else {
      await signup.save();
      res.status(201).json({ massege: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// login page

router.post("/signin", async (req, res) => {
  try {
    console.log(req.body.email);

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "please fill the blank input1" });
    }

    const userlogin = await Signup.findOne({ email: email });

    if (userlogin) {
      const userIsmatch = await bcrypt.compare(password, userlogin.password);

      if (!userIsmatch) {
        res.status(400).json({ error: "Invalide credentials" });
      } else {
        const token = await userlogin.generateAuthToken();
        console.log(token);
        //25892000000
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 604800),
          httpOnly: true,
        });
        res.json({ message: "user login successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalide credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

//send the otp

router.post("/sendotp", async (req, res) => {
  try {
    const data = await Signup.findOne({ email: req.body.email });
    const responseType = {};
    if (data) {
      const otpcode = Math.floor(Math.random() * 10000 + 1);
      const otpData = new Otp({
        email: req.body.email,
        code: otpcode,
        expireIn: new Date().getTime() + 300 * 1000,
      });
      const otpResponse = await otpData.save();
      responseType.statusText = "Success";
      responseType.message = "please check your email id";
    } else {
      responseType.statusText = "error";
      responseType.message = "user not found";
    }
    res.status(200).json(responseType);
    res.status(200).json("okk");
  } catch (error) {
    console.log(error);
  }
});

//verify otp

// router.post("/verifyotp", async (req, res) => {
//   const data = Otp.find({email:req.body.email, code:req.body.otpcode});
//   if (!req.body.email || req.body.otpcode) {
//     res.status(404).send("Invalid credentials")

//   }
//   if (data) {
//     const currentTime = new Date().getTime();
//     console.log(currentTime)
//     const diff = data.expireIn - currentTime;
//     if (diff < 0) {
//       console.log(diff)
//       response.message = "Token expire";
//       response.statusText = "error";
//     }else{

//       const signup = await Signup.findOne({email:req.body.email})
//       res.json("email verified with otp")
//     }
//   }
//   else{
//     res.status(400).send("email not verified with otp")
//   }
// });

//logout page

router.get("/logout", (req, res) => {
  console.log("logout page");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user loged out");
});

//profile page

router.get("/profile", authenticate, (req, res) => {
  res.send(req.rootUser);
});

//home page

router.get("/userdata", authenticate, (req, res) => {
  res.send(req.rootUser);
});

//password reset

router.post("/change-password", async (req, res) => {
  try {
    const { email, code, password, confirmPassword } = req.body;
    if (!email || !code || !password || !confirmPassword) {
      return res.status(400).json({ error: "fill the blank input filed" });
    }
    const olduser = await Signup.findOne({ email });
    if (!olduser) {
      return res.status(400).json({ error: "user is not found" });
    }
    const newpassword = await bcrypt.hash(password, 12);
    const confirmnewPassword = await bcrypt.hash(confirmPassword, 12);
    const updatepassword = await Signup.findOneAndUpdate(
      { email },
      {
        $set: {
          password: newpassword,
          confirmPassword: confirmnewPassword,
        },
      }
    );
    if (updatepassword) {
      return res.status(200).json({ message: "Password change successfully" });
    } else {
      return res.status(400).json({ error: "password is not change" });
    }
  } catch (error) {
    console.log(error);
  }
});

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

// router.post("/email-send", async (req, res) => {
//   try {
//     const data = await Signup.findOne({ email:req.body.email });
//     const responseType = {};
//     if(data){
//       const otpcode = Math.floor((Math.random()*10000)+1);
//       const otpData = new Otp({
//         email:req.body.email,
//         code:otpcode,
//         expireIn:new Date().getTime() + 300*1000
//       })
//       const otpResponse = await otpData.save();
//       responseType.statusText = 'Success'
//       responseType.message = 'please check your email id'
//     }
//     else{
//       responseType.statusText = 'error'
//       responseType.message = 'user not found'
//     }
//     res.status(200).json(responseType);
//     res.status(200).json('okk')

//   } catch (error) {
//     console.log(error)
//   }
// })
