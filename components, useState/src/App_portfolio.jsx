import Header from "./com_portfolio/Header";
import Introduce from "./com_portfolio/Introduce";
import Portfolio from "./com_portfolio/Portfolio";
import ContactMe from "./com_portfolio/ContactMe";
import Footer from "./com_portfolio/Footer";
function App() {
  return (
    // Container
    <div className="bg-red-100 min-h-screen">
      <Header />
      <main>
        <Introduce />
        <Portfolio />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
