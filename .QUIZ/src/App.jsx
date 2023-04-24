import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col gap-8  justify-center items-center">
      <A />
      <B />
      <C />
      <D />
      <div className="flex items-center">
        <button className="btn-style" onClick={onClickMinus}>
          -
        </button>
        <div className="text-main mx-4 text-bold text-4xl">{count}</div>
        <button className="btn-style" onClick={onClickPlus}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
