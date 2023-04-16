const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo");

const app = express();

const port = 3010;

app.use(cors({ origin: "http://localhost:3000" })); //frontend 주소적기
//json형식을 보낼 수는 있는데 읽을 수 없음 >> use express사용
app.use(express.json());
app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🦻`);
});
