const GameResult = () => {
  const point = localStorage.getItem("point") | 0;

  return (
    <div className="bg-green-700 w-full grow flex flex-col justify-end items-center text-white pb-8">
      <div className="text-6xl font-bold">UP & DOWN</div>
      <div className="text-2xl">현재 점수 : {point}</div>
    </div>
  );
};
export default GameResult;
