// class로 component 만들기
// import { Component } from "react";

// class ClassComp extends Component {
//   state = {
//     count: 0,
//   };
//   setCount(num) {
//     this.state({
//       count: num,
//     }); //count값을 새로 받아온 num 인자로 바꿔줌
//   }

//   render() {
//     return (
//       <div>
//         {this.state.count}
//         {/* this는 자기자신을 말함. 실행되는 곳에 따라 계속 변경됨 (다른언어의 this랑 개념이 조금 다름)
//         여기서 this는 class를 말함 */}
//         <button onClick={() => this.setCount(this.state.count + 1)}>+</button>
//       </div>
//     );
//   }
// }
// export default ClassComp;

//함수형으로 만들기
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const onClickAdd = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-xl font-bold">{count}</div>
      <button onClick={onClickAdd} className="w-8 h-8 bg-blue-200 rounded-xl">
        +
      </button>
    </div>
  );
}
export default Counter;
