import { useContext } from "react";
import { AppContext } from "../App";

const GrandChild = () => {
  const { gift, setGift } = useContext(AppContext);
  return (
    <div>
      <div className="bg-green-400 w-40 h-40">GrandChild : {gift}</div>
      <button onClick={() => setGift(gift + 1)}>증가</button>
    </div>
  );
};
export default GrandChild;
