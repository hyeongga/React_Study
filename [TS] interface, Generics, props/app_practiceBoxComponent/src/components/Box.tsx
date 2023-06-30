import { FC, useState } from "react";

export enum Color {
  Pink = "pink",
  Red = "red",
  Blue = "blue",
  Green = "green",
}

export interface BoxProps {
  color: Color;
  width: number;
  height?: number; //?는 optional을 의미 (있어도 되고 없어도 되는 값)
}

const Box: FC<BoxProps> = ({ color, width, height }) => {
  const [newWidth, setNewWidth] = useState<number>(width);

  const onClickBox = () => {
    setNewWidth(newWidth + 100);
  };
  return (
    <div
      style={{
        backgroundColor: color,
        width: newWidth, // width : width 같은 값일경우, 생략가능
        height: height ? height : newWidth, // ? 삼항연산자 (height값이 없는 경우 newwidth값이 height값을 대체)
        margin: 40,
        transition: "1s",
      }}
      onClick={onClickBox}
    ></div>
  );
};

export default Box;
