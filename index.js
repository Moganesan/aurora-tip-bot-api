const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.status(200).send("Aurora Tip Bot Api");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
