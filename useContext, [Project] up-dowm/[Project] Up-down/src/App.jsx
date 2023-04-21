import { useEffect, createContext, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";

export const AppContext = createContext();

function App() {
  const [point, setPoint] = useState(5);

  useEffect(() => {
    let savedPoint = localStorage.getItem("point");

    if (!savedPoint) {
      localStorage.setItem("point", 0);
    }
  }, []);

  return (
    <AppContext.Provider value={{ point, setPoint }}>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <GameResult />
        <GameBoard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
