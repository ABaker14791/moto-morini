// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ status: "ok" });
}

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
// const msg = {
//   to: "abakermtb@gmail.com", // Change to your recipient
//   from: "adam_baker@live.co.uk", // Change to your verified sender
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });
