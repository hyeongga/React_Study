import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Worldcup from "./pages/Worldcup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/worldcup" element={<Worldcup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
