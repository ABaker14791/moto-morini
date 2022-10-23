const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
`;

  const data = {
    to: "sales@akaautomotive.co.uk",
    from: "contact@motomoriniwestyorkshire.co.uk",
    subject: "New Moto Morini contact message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  await mail.send(data);

  res.status(200).json({ status: "ok" });
};
