const express = require("express"); //import기능

const app = express();
const port = 3010; //마음대로 지정가능 ; react에서 3000번 사용했기때문에 안겹치게 하기위해 3010 사용
app.get("/", (req, res) => {
  res.send("Hallo~ Hola!");
}); //get (경로, 띄어줄것) 응답 요청을 하면 응답을 해라!
//우리는 응답하는 쪽을 작성해야함, res.send로 작성

app.post("/", (req, res) => {
  res.send("post");
});

app.put("/", (req, res) => {
  res.send("put");
});

app.delete("/", (req, res) => {
  res.send("delete");
});
//get읽기, post생성, put(전체교체)업데이트,delet삭제
//get은 웹브라우저로 볼수있지만, 나머지는 postman을 이용해야 볼 수 있음

app.listen(port, () => {
  console.log(`sercer listening on port :${port}`);
}); // 서버에 들어오면 할일 ,, listen이 제일 마지막에 와야함
