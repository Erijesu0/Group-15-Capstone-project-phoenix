import Header from "./Components/Header";
import Hero from "./Components/Hero";
import VideoSection from "./Components/VideoSection";
import PlanetGrid from "./Components/PlanetGrid";
import Table from "./Components/Table";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <div className="bg-dark">
        <Header />
        <div className="container">
          <Hero />
        </div>
      </div>

      <div className="bg-white">
        <div className="container">
          <VideoSection />
        </div>
      </div>

      <div className="bg-light-blue">
        <div className="container">
          <PlanetGrid />
        </div>
      </div>

      <div className="bg-white">
        <div className="container">
          <Table />
        </div>
        <div className="container">
          <ContactForm />
        </div>
      </div>

      <div className="bg-dark">
        <div className="container footer-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
