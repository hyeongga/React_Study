import { useEffect, useState } from "react";
import animalData from "./animalData.json";
import AnimalCard from "../components/AnimalCard";
import WinAnimalCard from "../components/WinAnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]);
  const [end, setEnd] = useState(16);

  //이차함수(?)
  const onClickChoice = (v) => () => {
    setChoice(choice + 2);
    // react push를 이렇게 쓴다.
    setNextRound([...nextRound, v]);
    //push 없이 새로운 값을 추가하는 방법 ; 상태관리때문에 push 사용 x
    // 기존의 배열에 하나를 추가하는 개념이 아니라 새로운 배열을 기존의 변수에 다시 넣는 개념임
  };

  // 랜덤으로 오름차순 or 내림차순으로 정렬
  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
    });
    setShuffleAnimal(shuffleAnimalData);
  }, []);

  useEffect(() => console.log(nextRound), [nextRound]);
  useEffect(() => {
    if (choice === end) {
      setShuffleAnimal(nextRound);
      setNextRound([]);
      setEnd(end / 2);
      setChoice(0);
    }
  }, [choice]);

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {shuffleAnimal &&
        (end === 1 ? (
          <WinAnimalCard animal={shuffleAnimal[choice]} />
        ) : (
          <>
            <AnimalCard
              animal={shuffleAnimal[choice]}
              choice={choice}
              onClickChoice={onClickChoice}
            />
            <div className="text-2xl mx-8 font-bold">
              <div>{`${end === 2 ? "결승" : end + "강"}`}</div>
              <div>VS</div>
            </div>
            <AnimalCard
              animal={shuffleAnimal[choice + 1]}
              choice={choice + 1}
              onClickChoice={onClickChoice}
            />
          </>
        ))}
    </div>
  );
};

export default Worldcup;
