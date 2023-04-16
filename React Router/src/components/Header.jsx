import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-purple-100 flex justify-center items-center h-20">
      <Link to="/">
        <button className="bg-red-300 btnStyle">메인</button>
      </Link>
      <Link to="/a">
        <button className="bg-orange-300 btnStyle">A</button>
      </Link>
      <Link to="/b">
        <button className="bg-yellow-300 btnStyle">B</button>
      </Link>
      <Link to="/c">
        <button className="bg-green-300 btnStyle">C</button>
      </Link>
    </header>
  );
}
export default Header;
