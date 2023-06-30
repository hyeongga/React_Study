import { FC } from "react";
import Box, { Color } from "./components/Box";
import Circle from "./components/Circle";

//FC는 랜더링 기능인 return필수
const App: FC = () => {
  return (
    <div>
      <Box color={Color.Pink} width={200} height={200} />
      <Box color={Color.Blue} width={400} height={100} />
      <Box color={Color.Green} width={300} height={0} />
      <Circle color={Color.Red} width={100} height={100} radius={9999} />
    </div>
  );
};

export default App;
