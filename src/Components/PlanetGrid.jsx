import { useState, useEffect } from "react";
import "./PlanetGrid.css";
import planetsData from "../data/planets.json";

const PlanetGrid = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPlanets(planetsData);
    setLoading(false);
  }, []);

  return (
    <section id="planet-grid" className="planet-section">
      <h2 className="section-title">
        Visualizing the Differences Between Planets
      </h2>
      <p className="section-subtitle">
        Each planet in our solar system has unique physical characteristics.
        Visual comparisons help highlight how vastly different terrestrial
        planets are from gas giants and ice giants.
      </p>

      {loading ? (
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          Loading planet data...
        </p>
      ) : (
        <div className="grid-container">
          {planets.map((planet, index) => (
            <figure key={index} className="planet-card">
              <img src={planet.image} alt={planet.planet} />
              <figcaption className="planet-card-info">
                <strong>{planet.planet}</strong>
                <span>
                  Distance from Sun
                  <br />
                  {planet.distanceFromSun} million km
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
};

export default PlanetGrid;
