import { useState } from "react";

function B() {
  const [counter, setCounter] = useState(0);
  const onClickAdd = () => {
    setCounter(counter + 1);
  };
  const onClickSub = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="bg-red-100  flex justify-center items-center">
      <button
        onClick={onClickSub}
        className="py-2 px-4 bg-white border-2 border-blue-400 text-main rounded-lg shadow-md hover:bg-main hover:text-white focus:outline-none mx-4"
      >
        -
      </button>
      <div className="text-main">{counter}</div>
      <button onClick={onClickAdd} className=" mx-5 btn-style">
        +
      </button>
    </div>
  );
}
export default B;
