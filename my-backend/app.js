import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

const itemPerPage = 2;
const port = 5175;

app.use(cors({ origin: "*", methods: "GET", origin: "http://localhost:5173" }));

app.get("/products", async (req, res) => {
  const { page, refresh } = req.query;
  const start = refresh ? 0 : page * itemPerPage;
  const itemsCount = refresh ? page * itemPerPage : start + itemPerPage;

  let response;

  fs.readFile("./products.json", (err, data) => {
    if (err) throw err;
    response = JSON.parse(data)?.slice(start, itemsCount);
    res.json({ data: response });
  });
});

app.get("/category", (req, res) => {
  fs.readFile("./category.json", (err, data) => {
    if (err) throw err;
    response = JSON.parse(data);
    console.log("🚀 ~ fs.readFile ~ response:", response);
    res.json({ data: response });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
