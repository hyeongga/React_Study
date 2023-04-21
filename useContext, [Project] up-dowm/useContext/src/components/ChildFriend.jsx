import { useContext } from "react";
import { AppContext } from "../App";

const ChildFriend = () => {
  const { gift } = useContext(AppContext);
  return <div className="bg-green-900 w-40 h-40">ChildFriend : {gift}</div>;
};
export default ChildFriend;
