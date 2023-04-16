import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import A from "./pages/a";
import B from "./pages/b";
import C from "./pages/c";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-100 min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/a" element={<A />} />
          <Route path="/b" element={<B />} />
          <Route path="/c" element={<C />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
