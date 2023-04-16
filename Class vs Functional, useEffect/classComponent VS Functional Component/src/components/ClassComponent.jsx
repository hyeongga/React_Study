import { Component } from "react";
class ClassComponent extends Component {
  render() {
    return <div className="bg-yellow-100 h-96">ClassComponent</div>;
  }
} // Component에 있는 기능을 ClassComponet로 들고와서 사용하겠다
//render : 화면에 표시하기 위함
export default ClassComponent;

//함수형 component는 기능 1개, class형 component는 모든 기능을 다 가지고 있음.
