const express = require("express");

const router = express.Router(); //라우터로 만듦

router.get("/:id", (req, res) => {
  console.log(req.params); //결과가 cmd창으로 들어옴 (backend)
  res.send("특정트윗조회"); //결과 postman에 출력 (prontend)
});

router.get("/", (req, res) => {
  res.send("전체트윗조회");
});

router.post("/", (req, res) => {
  res.send("게시물 생성");
});

router.put("/:id", (req, res) => {
  res.send("특정 게시물 수정");
});

router.delete("/:id", (req, res) => {
  res.send("게시물 삭제");
});

module.exports = router;
