import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="bg-green-500 min-h-screen flex flex-col justify-center items-center">
      <div className="text-gray-100 text-2xl font-bold">
        아이스크림🍦인줄 알았지만 귀여움 월드컵이죵
      </div>
      <Link to="/worldcup">
        <button className="bg-green-600 text-white px-4 py-2 rounded-2xl mt-8">
          Start!
        </button>
      </Link>
    </div>
  );
};
export default Main;
