import Header from "./Components/Header";
import Hero from "./Components/Hero";
import PlanetGrid from "./Components/PlanetGrid";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div className="app-wrapper">
      <div className="bg-dark">
        <Header />
        <div className="container">
          <Hero />
        </div>
      </div>

      <div className="bg-light-blue">
        <div className="container">
          <PlanetGrid />
        </div>
      </div>

      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
