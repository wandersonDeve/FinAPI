const express = require("express");

const app = express();

const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Esta fucnionando" });
});

app.listen(port, () => {
  console.info(`Server is running in http://localhost:${port}`);
});
