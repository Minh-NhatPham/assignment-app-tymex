import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

const itemPerPage = 5;
const port = 5175;

app.use(cors({ origin: "*", methods: "GET", origin: "http://localhost:5173" }));

app.get("/products", async (req, res) => {
  const { page, refresh } = req.query;
  const start = refresh ? 0 : page * itemPerPage;
  const end = refresh ? (Number(page) + 1) * itemPerPage : Number(start) + Number(itemPerPage);

  let response;

  fs.readFile("./products.json", (err, data) => {
    if (err) throw err;
    const totalItems = Array.from(JSON.parse(data));
    response = totalItems?.slice(start, end);
    const pageCount = Math.ceil(totalItems.length / itemPerPage) - 1;
    res.json({ data: response, totalPage: pageCount });
  });
});

app.get("/category", (req, res) => {
  fs.readFile("./category.json", (err, data) => {
    if (err) throw err;
    let response;

    response = JSON.parse(data);
    res.json({ data: response });
  });
});

app.get("/search", (req, res) => {
  const { keyword } = req.query;
  let response;
  fs.readFile("./products.json", (err, data) => {
    if (err) throw err;
    response = JSON.parse(data);
    const items = response?.filter(
      (item) =>
        item?.name?.toLowerCase().includes(keyword) || item.gender?.toLowerCase().includes(keyword)
    );
    res.json({ data: items });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
