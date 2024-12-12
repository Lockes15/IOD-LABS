const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  const { num1, num2 } = req.query;
  const num1Num = parseInt(num1, 10);
  const num2Num = parseInt(num2, 10);
  res.send(`${num1Num + num2Num}`);
});

router.get("/multiply", (req, res) => {
  const { num1, num2 } = req.query;
  const num1Num = parseInt(num1, 10);
  const num2Num = parseInt(num2, 10);
  res.send(`${num1Num * num2Num}`);
});

router.get("/subtract", (req, res) => {
  const { num1, num2 } = req.query;
  const num1Num = parseInt(num1, 10);
  const num2Num = parseInt(num2, 10);
  res.send(`${num1Num - num2Num}`);
});

router.get("/divide", (req, res) => {
  const { num1, num2 } = req.query;
  const num1Num = parseInt(num1, 10);
  const num2Num = parseInt(num2, 10);
  res.send(`${num1Num / num2Num}`);
});

module.exports = router;
