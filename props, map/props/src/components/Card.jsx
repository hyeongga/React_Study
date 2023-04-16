import React from "react";
import { fakeUseState } from "../fakeHooks";
function Card({ color, cardName }) {
  const [count, setCount] = UseState();
  const [num1, setNum1] = UseState();
  const [num2, setNum2] = UseState();
  const { setValue, value } = fakeUseState();
  const { setValue: setNum3, value: num3 } = fakeUseState();
  const { setValue: setNum4, value: num4 } = fakeUseState();
  return <div className={`${color} w-40 h-60`}>{cardName}</div>;
}
export default Card;
