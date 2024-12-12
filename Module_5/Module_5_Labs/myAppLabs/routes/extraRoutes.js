const express = require("express");
const router = express.Router();

router.get("/random", (req, res) => {
  const { min = 0, max = 100 } = req.query;
  const minNum = parseInt(min, 10);
  const maxNum = parseInt(max, 10);

  if (isNaN(minNum) || isNaN(maxNum) || minNum > maxNum) {
    return res.status(400).send("Invalid min or max values");
  }

  const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  res.send(`${randomNum}`);
});

module.exports = router;
