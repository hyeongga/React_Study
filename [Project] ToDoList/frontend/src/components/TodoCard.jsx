import axios from "axios";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const TodoCard = ({ todo, isDone, id, userId, todos, setTodos }) => {
  const [todoIsDone, setTodoIsDone] = useState(isDone);
  const onClickDone = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/todo/${id}/done`,
        {
          userId,
        }
      );

      setTodoIsDone(response.data.todo.isDone);
    } catch (error) {
      console.error(error);

      alert("투두 완료 중 에러가 발생했습니다.");
    }
  };

  const onClickDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/todo/${id}`,
        {
          data: {
            userId,
          },
        }
      );
      const array = todos.filter((v, i) => {
        return v.id !== response.data.todo.id;
      });

      setTodos(array);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex my-4">
      {todoIsDone ? (
        <>
          <button className="relative" onClick={onClickDone}>
            <div className="border-4 border-pink-400 w-8 h-8 rounded-xl bg-pink-400 p-2"></div>
            <div className="absolute border-4 border-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 scale-75 rounded-xl bg-pink-400 p-2"></div>
          </button>
        </>
      ) : (
        <button
          className="border-4 border-pink-400 w-8 h-8 rounded-xl"
          onClick={onClickDone}
        ></button>
      )}
      <div className="text-2xl ml-4 truncate">{todo}</div>
      <button className="ml-4 hover:text-pink-400 hover:scale-125 ease-linear duration-300">
        <FiTrash2 size={24} onClick={onClickDelete} />
      </button>
    </div>
  );
};

export default TodoCard;
