import { useEffect, useState } from "react";
import axios from "axios";
import TodoCard from "./components/TodoCard";
import CreateToDo from "./components/CreateToDo";

function App() {
  const [toDoList, setToDoList] = useState();

  const getToDoList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo`
      );

      if (response.status !== 200) {
        alert("에러 발생!");
        return;
      }

      setToDoList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-16">
      <h1 className="text-4xl font-bold">AWESOME TO DO LIST 😎</h1>
      <div>
        <div className="mt-8 text-sm font-semibold">
          If I only had an hour to chop down a tree, I would spend the first 45
          minutes sharpening my axe, Abrabam Lincoln
        </div>
        <div className="text-xs">
          나무 베는데 한 시간이 주어진다면, 도끼를 가는데 45분을 쓰겠다,
          에비브러햄 링컨
        </div>
        <CreateToDo getToDoList={getToDoList} />
      </div>
      <div className="mt-16 flex flex-col w-1/2">
        {toDoList
          ? toDoList.map((v, i) => {
              return (
                <TodoCard
                  key={i}
                  title={v.title}
                  index={i}
                  getToDoList={getToDoList}
                  isDone={v.isDone}
                />
              );
            })
          : "로딩중입니다"}
      </div>
    </div>
  );
}

export default App;
