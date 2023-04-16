import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {toggle && <Counter count={count} setCount={setCount} />}
      {/* useState flase대신 이렇게도 표기가능 :{toggle ? <Counter /> : "카운터"} */}
      <button
        onClick={onClickToggle}
        className="bg-pink-300 px-4 py-2 rounded-2xl text-white font-bold mt-4"
      >
        버튼
      </button>
    </div>
  );
}

export default App;
