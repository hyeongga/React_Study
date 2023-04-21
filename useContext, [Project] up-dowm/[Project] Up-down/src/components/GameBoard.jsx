import { useContext } from "react";
import { useEffect, useState } from "react";
import { AppContext } from "../App";

const GameBoard = () => {
  const { point, setPoint } = useContext(AppContext);
  // const [point, setPoint] = useState(5);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [choiceNum, setChoiceNum] = useState("");
  const [hint, setHint] = useState("0~100 사이의 숫자를 맞춰보세요!");

  const onChangeChoice = (e) => {
    setChoiceNum(e.target.value);
  };

  const onClickCheck = () => {
    let checkNum = parseInt(choiceNum);
    //내부함수에서만 쓸 수있는 변수
    // 예외처리사항 2가지 ( 1. 문자입력 / 2. '0~100'이외의 숫자 )
    if (isNaN(checkNum)) {
      setHint("숫자를 입력해주세요");
      return;
    }

    if (0 > checkNum || checkNum >= 100) {
      setHint("0~100사이 숫자를 입력해주세요");
      return;
    }
    // 랜덤 숫자와 유저가 선택한 숫자 비교
    if (randomNum === checkNum) {
      setHint("정답입니다🥳");
      //랜덤값 초기화

      if (point > 0) {
        //기존 점수를 불러와 현재 점수와 합침
        let savedPoint = localStorage.getItem("point");
        localStorage.setItem("point", parseInt(savedPoint) + point);
      }

      setRandomNum(Math.floor(Math.random() * 100));
      setChoiceNum("");
      setPoint(5);
    } else if (randomNum > checkNum) {
      setHint(`정답은 ${checkNum}보다 큰 숫자입니다.`);
      setPoint(point - 1);
    } else if (randomNum < checkNum) {
      setHint(`정답은 ${checkNum}보다 작은 숫자입니다.`);
      setPoint(point - 1);
    }
  };

  useEffect(() => {
    console.log(`랜덤 숫자는 ${randomNum}입니다.`);
  }, [randomNum]);

  useEffect(() => {
    console.log(`유저가 입력한 숫자는 ${choiceNum}입니다.`);
  }, [choiceNum]);
  useEffect(() => {
    console.log(`포인트는 ${point}입니다.`);
  }, [point]);

  return (
    <div className=" w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-base font-bold">{hint}</div>
      <div>
        <input
          className="border-1 rounded-lg px-4 py-2 focus:outline-purple-200 shadow-lg"
          type="text"
          value={choiceNum} //value값이 undefiend여야만 입력이가능
          onChange={onChangeChoice}
        />
        <button
          onClick={onClickCheck}
          className="px-4 py-2 ml-2 rounded-lg border-2 bg-purple-400 text-white shadow-lg"
        >
          확인
        </button>
      </div>
    </div>
  );
};
export default GameBoard;
