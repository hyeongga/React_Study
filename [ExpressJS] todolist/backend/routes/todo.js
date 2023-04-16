const express = require("express");
let todoData = require("../todoData.json"); //todolist data를 json파일에서 불러옴

const router = express.Router();

//전체 todolist 읽어오기
router.get("/", (req, res) => {
  console.log(todoData);
  res.json(todoData);
});

//특정 todolist 읽기 (if 목록에 없는 항목 조회시 예외처리)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (parseInt(id) >= todoData.length) {
<<<<<<< HEAD
    return res.status(400).json({ error: "존재하지 않는 ID입니다" });
=======
    res.status(400).json({ error: "존재하지 않는 ID입니다" });
>>>>>>> 975bbcf3a521759df562f24af97938822fa2d1bb
  }
  res.json(todoData[parseInt(id)]);
});

<<<<<<< HEAD
//todo 생성(title, desc읽어서 todo데이터 추가 : 두 항목이 다 작성되지 않을경우 예외처리)
router.post("/", (req, res) => {
  const { title, desc } = req.body;

  if (!title || !desc) {
    return res
      .status(400)
      .json({ error: "타이틀과 설명을 입력하셔야 합니다." });
  }
=======
//title, desc읽어서 todo데이터 추가
router.post("/", (req, res) => {
  const { title, desc } = req.body;
>>>>>>> 975bbcf3a521759df562f24af97938822fa2d1bb
  todoData.push({ title, desc, isDone: false });
  res.json(todoData);
});

//title, desc 내용수정 (예외처리: 목록에 없는 항목, title/desc를 둘다 입력하지 않았을때)
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;

  if (parseInt(id) >= todoData.length) {
<<<<<<< HEAD
    return res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }
  if (!title && !desc) {
    return res
=======
    res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }
  if (!title && !desc) {
    res
>>>>>>> 975bbcf3a521759df562f24af97938822fa2d1bb
      .status(400)
      .json({ error: "타이틀이나 설명 중에 하나의 값은 입력해야 합니다." });
  }
  //둘중 한가지 목록만 작성하였을 경우, 남은 목록이 수정되지 않도록하기 위함
  todoData[parseInt(id)] = {
    title: title ? title : todoData[parseInt(id)].title,
    desc: desc ? desc : todoData[parseInt(id)].desc,
    isDone: todoData[parseInt(id)].isDone,
  };

  console.log(todoData);
  res.json(todoData);
});

<<<<<<< HEAD
//투두 완료처리; isDone(boolean) 수정 (true->false, false->true ; toggle기능 // 예외처리:목록에 없는 항목)
=======
//isDone(boolean) 수정 (true->false, false->true ; toggle기능 // 예외처리:목록에 없는 항목)
>>>>>>> 975bbcf3a521759df562f24af97938822fa2d1bb
router.put("/done/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
<<<<<<< HEAD
    return res.status(400).json({ error: "존재하지 않는 ID입니다" });
=======
    res.status(400).json({ error: "존재하지 않는 ID입니다" });
>>>>>>> 975bbcf3a521759df562f24af97938822fa2d1bb
  }
  todoData[parseInt(id)] = {
    title: todoData[parseInt(id)].title,
    desc: todoData[parseInt(id)].desc,
    isDone: !todoData[parseInt(id)].isDone,
  };

  console.log(todoData);
  res.json(todoData);
});

//특정 todolist삭제 (id에 해당하는 값 빼고 필터를 통과시킴 ; 나머지 데이터가 살아남음 = 해당 데이터만 삭제됨 // 예외처리:목록에 없는 항목)
<<<<<<< HEAD
=======

>>>>>>> 975bbcf3a521759df562f24af97938822fa2d1bb
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
<<<<<<< HEAD
    return res.status(400).json({ error: "존재하지 않는 ID입니다" });
=======
    res.status(400).json({ error: "존재하지 않는 ID입니다" });
>>>>>>> 975bbcf3a521759df562f24af97938822fa2d1bb
  }

  todoData = todoData.filter((v, i) => {
    return parseInt(id) !== i;
  });

  console.log(todoData);
  res.json(todoData);
});

module.exports = router;
