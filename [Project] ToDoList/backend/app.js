const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const todoRouter = require("./routes/todo");
const app = express();

const port = 3010;

app.use(cors());
app.use(express.json()); //req를 읽을 수 없기 때문에 json형태로 읽어오기 위해서 작성
app.use("/user", userRouter);
app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port : ${port} 🦉`);
});
//listen이 없으면 port가 안열려서 접속을 못하게 됨
