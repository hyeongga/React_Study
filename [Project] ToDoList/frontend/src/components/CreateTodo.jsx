import { useState } from "react";
import axios from "axios";

const CreateTodo = ({ userId, setTodos, todos }) => {
  const [todo, setTodo] = useState("");

  const onSubmitCreateTodo = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/todo`,
        {
          todo,
          userId,
        }
      );

      setTodos([response.data.todo, ...todos]);
      setTodo("");
    } catch (error) {
      console.error(error);

      alert("투두 생성중 에러가 발생하였습니다.");
    }
  };

  return (
    <form className="flex mt-2" onSubmit={onSubmitCreateTodo}>
      <input
        className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        className="ml-4 px-2 py-1 bg-pink-400 rounded-lg text-gray-50"
        type="submit"
        value="새 투두 생성"
      />
    </form>
  );
};

export default CreateTodo;

//gettodos로 가지고오기
// const CreateTodo = ({ userId, getTodos }) => {
//   const [todo, setTodo] = useState("");

//   const onSubmitCreateTodo = async (e) => {
//     try {
//       e.preventDefault();

//       await axios.post(`${process.env.REACT_APP_BACKEND_URL}/todo`, {
//         todo,
//         userId,
//       });

//       getTodos();
//       setTodo("");
//     } catch (error) {
//       console.error(error);

//       alert("투두 생성중 에러가 발생하였습니다.");
//     }
//   };
