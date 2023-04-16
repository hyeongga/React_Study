const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send("특정유저조회");
}); //마이프로필

router.post("/", (req, res) => {
  res.send("신규유저 생성");
});

router.put("/:id", (req, res) => {
  res.send("회원 정보 수정");
});

router.delete("/:id", (req, res) => {
  res.send("회원정보 삭제");
});

module.exports = router;
