import axios from "axios";
import { useState } from "react";

function D() {
  const [result, setResult] = useState("");
  const onClickBtn = async (e) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}`);

      setResult(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-red-100 flex flex-col justify-center items-center">
      <button className="btn-style" onClick={onClickBtn}>
        요청
      </button>
      {result && <div className="mt-14 font-bold">{result}</div>}
    </div>
  );
}
export default D;
