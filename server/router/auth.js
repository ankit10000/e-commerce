const jwt = require("jsonwebtoken");
const express = require("express");
const Signup = require("../model/userSchema");
const Otp = require("../model/otp");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const nodemailer = require("nodemailer");
// const { sendverificationEmail } = require("../config/sendEmail");

require("../conn");
const signup = require("../model/userSchema");
const { eventNames, updateMany, deleteMany } = require("../model/otp");
const { config } = require("dotenv");
const { findOneAndDelete } = require("../model/userSchema");

//signup page

router.post("/signup", async (req, res) => {
  const { username, email, contactnumber, password, confirmPassword } =
    req.body;
  if (!username || !email || !contactnumber || !password || !confirmPassword) {
    return res.status(421).json({ error: "please fill the blank input" });
  }
  try {
    const userExistemail = await Signup.findOne({ email: email });
    const userExistusername = await Signup.findOne({ username: username });
    const userExistcontactnumber = await Signup.findOne({contactnumber: contactnumber,});
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
      return res.status(423).send({ error: "Username Alerady Exist" });
    } else if (userExistcontactnumber) {
      return res.status(424).json({ error: "Contact number Alerady Exist" });
    } else if (password != confirmPassword) {
      return res.status(425).json({ error: "Password is not match" });
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
    const { email } = req.body;
    const data = await Signup.findOne({ email: email });
    const responseType = {};
    if (data) {
      const otpcode = Math.floor(Math.random() * 10000 + 1);
      const otpData = new Otp({
        email: email,
        code: otpcode,
        expireIn: new Date().getTime() + 300 * 1000,
      });
      const transport = nodemailer.createTransport({
        host: process.env.NODE_HOST,
        port: process.env.NODE_PORT,
        auth: {
          user: process.env.NODE_USER,
          pass: process.env.NODE_PASS,
        },
      });
      transport.sendMail({
        from: "pagalworld.com",
        to: email,
        subject: "OTP Authentication",
        html: `Your OTP code is ${otpcode}`,
      });
      const otpResponse = await otpData.save();
      deleteotpondoc(email);
      res.status(200).json({ message: "please check your email id" });
    } else {
      res.status(400).json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

const deleteotpondoc = async (email) => {
  setTimeout(async () => {
    const result = await Otp.deleteMany({ email: email });
    console.log(result);
  }, 120000);
};

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
    const { code, email, password, confirmPassword } = req.body;
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ error: "fill the blank input filed" });
    }
    const olduser = await Signup.findOne({ email });
    if (olduser) {
      const data = await Otp.find({ email, code });
      if (data) {
        const currentTime = new Date().getTime();
        const diff = data - currentTime;
        if (diff) {
          return res.status(401).json({ error: "invalide OTP" });
        } else {
          if (password != confirmPassword) {
            return res.status(402).json({ error: "Password is not match" });
          } else {
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
              return res
                .status(200)
                .json({ message: "Password change successfully" });
            } else {
              return res.status(403).json({ error: "password is not change" });
            }
          }
        }
      } else {
        return res.status(404).json({ error: "user not found" });
      }
    } else {
      return res.status(405).json({ error: "user is not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
