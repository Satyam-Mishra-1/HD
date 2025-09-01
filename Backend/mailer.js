// const nodemailer = require("nodemailer");

// async function sendOTPEmail(to, otp) {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS, 
//     },
//   });

//   await transporter.sendMail({
//     from: `"Dev Notes" <${process.env.EMAIL_USER}>`,
//     to,
//     subject: "Verify your email - Dev Notes",
//     text: `Your OTP is ${otp}. It expires in 5 minutes.`,
//   });
// }

// module.exports = sendOTPEmail;






// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail", // Or use SMTP settings of any provider (e.g., Outlook, Zoho, SendGrid, etc.)
//   auth: {
//     user: process.env.EMAIL_USER, // your email
//     pass: process.env.EMAIL_PASS, // app password (not your normal password)
//   },
// });

// async function sendOtpEmail(to, otp) {
//   await transporter.sendMail({
//     from: `"HD Notes" <${process.env.EMAIL_USER}>`,
//     to,
//     subject: "Your OTP Code",
//     html: `
//       <h2>Verification Code</h2>
//       <p>Your OTP is: <b>${otp}</b></p>
//       <p>It will expire in 5 minutes.</p>
//     `,
//   });
// }

// module.exports = sendOtpEmail;





const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,          // SSL
  secure: true,       
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,  // Gmail App Password
  },
});

module.exports = transporter;
