/* Function Component 기본개념

import { useState } from "react"; //class형 component처럼 기능을 할 수있기 위해서 추가된 개념 : Hooks!
const FunctionComponent = () => {
  const [count, setCount] = useState(0);
  return <div className="bg-blue-100 h-96">FunctionComponent</div>;
};

export default FunctionComponent;*/

//Lifestyle_useEffect
import { useEffect } from "react";
const FunctionComponent = () => {
  useEffect(() => {}, []);
  return <div className="bg-blue-100 h-96">FunctionComponent</div>;
};

export default FunctionComponent;
