import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello, wold!" });
});

app.post("/courses", (req, res) => {
  const { name } = req.body;

  return res.json({ name });
});

app.listen(3300, () => console.log("Server is running!"));
