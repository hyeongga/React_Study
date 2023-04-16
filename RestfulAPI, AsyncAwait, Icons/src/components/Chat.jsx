import axios from "axios";
import { useState } from "react";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitChat = async (e) => {
    //on함수들은 event를 요소로 가지고 있음
    //preventDefault를 사용하면 검색을 눌렀을때 화면이 새로고침 되는걸 막을 수 있음.
    try {
      e.preventDefault();

      if (isLoading) {
        alert("검색중입니다...");
        return;
      }

      if (!question) {
        alert("질문을 입력해주세요");
        return;
      }

      setIsLoading(true);
      setContent(""); //입력되면 창 비워지게 함 ; 근데 안됨,,지금,, 뭐가 잘못된겆;

      const response = await axios.post(
        "https://holy-fire-2749.fly.dev/chat",
        {
          //   question: `${question}`,
          //   question: question,
          question,
        },
        {
          headers: {
            Authorization: "Bearer BLOCKCHAINSCHOOL3",
          },
        }
      );
      if (response.status !== 200) {
        alert("오류가 발생했습니다.");
        setIsLoading(false);
        return;
      }

      console.log(response);
      setContent(response.data.choices[0].message.content);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white">
      <form onSubmit={onSubmitChat}>
        <input
          className="text-black rounded-sm"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input className="mx-2" type="submit" value="검 색" />
      </form>
      {content && <div className="mt-4 px-16">{content}</div>}
      {/* 오른쪽이 항상 있다라고 전제:  왼쪽이 존재하면 전체가 보이도록 해라 */}
    </div>
  );
};

export default Chat;
