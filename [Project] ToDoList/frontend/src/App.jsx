import { useEffect, useState } from "react";
import LogIn from "./components/LogIn";
import TodoCard from "./components/TodoCard";
import axios from "axios";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [user, setUser] = useState();
  const [todos, setTodos] = useState();
  const [skip, setSkip] = useState(0);

  const getTodos = async () => {
    try {
      if (!user) return;

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo/${user.id}?skip=${skip}`
      );

      setTodos(response.data.todos);
      setSkip(skip + 3);
    } catch (error) {
      console.error(error);

      alert("투두리스트를 불러오지 못했습니다.");
    }
  };

  const onClickLogOut = () => {
    setUser(undefined);
  };

  const onClikReload = async () => {
    try {
      if (!user) return;

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo/${user.id}?skip=${skip}`
      );

      setTodos([...todos, ...response.data.todos]);
      setSkip(skip + 3);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();

    console.log(user);
  }, [user]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  if (!user) {
    return <LogIn setUser={setUser} />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-16">
      <h1 className="text-4xl font-bold flex items-center">
        {user.account}님 환영합니다~ 😎
        <button
          className="ml-4 px-2 py-1 bg-pink-200 hover:bg-pink-400 rounded-lg text-gray-50 text-base"
          onClick={onClickLogOut}
        >
          로그아웃
        </button>
      </h1>
      <div>
        <div className="mt-8 text-sm font-semibold">
          If I only had an hour to chop down a tree, I would spend the first 45
          minutes sharpening my axe, Abrabam Lincoln
        </div>
        <div className="text-xs">
          나무 베는데 한 시간이 주어진다면, 도끼를 가는데 45분을 쓰겠다,
          에비브러햄 링컨
        </div>
        <CreateTodo userId={user.id} todos={todos} setTodos={setTodos} />
      </div>
      <div className="mt-16">
        <button
          className="ml-4 px-4 py-2 bg-pink-200 hover:bg-pink-400 rounded-lg text-gray-50 text-2xl"
          onClick={onClikReload}
        >
          갱신
        </button>
      </div>
      <div className="mt-16 flex flex-col w-1/2">
        {/* todos가 있는경우 map함수 실행 */}
        {todos &&
          todos.map((v, i) => {
            return (
              <TodoCard
                key={i}
                todo={v.todo}
                isDone={v.isDone}
                id={v.id}
                userId={user.id}
                todos={todos}
                setTodos={setTodos}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
