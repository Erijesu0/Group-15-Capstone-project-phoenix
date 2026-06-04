import "./Table.css";

const Table = () => {
  return (
    <div className="table-container">
      <h2 className="table-title">Planetary Facts at a Glance</h2>
      <p className="table-subtitle">
        Below is a comparative table of major planets in our solar system. The
        data highlights key physical properties used by astronomers and
        researchers worldwide.
      </p>

      <p className="data-source">
        Data about the planets of our solar system (Planetary facts taken from
        NASA)
      </p>

      <div className="responsive-table-wrapper">
        <table className="planetary-table">
          <thead>
            <tr>
              <th colSpan="2">Type</th>
              <th>Name</th>
              <th>Mass (10^24 kg)</th>
              <th>Diameter (km)</th>
              <th>Density (kg/m^3)</th>
              <th>Gravity (m/s^2)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td rowSpan="4" className="group-cell terrestrial-bg">
                Terrestrial Planets
              </td>
              <td className="subgroup-cell">—</td>
              <td className="planet-name">Mercury</td>
              <td>0.330</td>
              <td>4,879</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

            <tr>
              <td className="subgroup-cell">—</td>
              <td className="planet-name">Venus</td>
              <td>4.87</td>
              <td>12,104</td>
              <td>5243</td>
              <td>8.9</td>
            </tr>

            <tr>
              <td className="subgroup-cell">—</td>
              <td className="planet-name">Earth</td>
              <td>5.97</td>
              <td>12,756</td>
              <td>5514</td>
              <td>9.8</td>
            </tr>

            <tr>
              <td className="subgroup-cell">—</td>
              <td className="planet-name">Mars</td>
              <td>0.642</td>
              <td>6,792</td>
              <td>3933</td>
              <td>3.7</td>
            </tr>

            <tr>
              <td rowSpan="4" className="group-cell jovian-bg">
                Jovian Planets
              </td>
              <td rowSpan="2" className="subgroup-cell gas-bg">
                Gas Giants
              </td>
              <td className="planet-name">Jupiter</td>
              <td>1898</td>
              <td>142,984</td>
              <td>1326</td>
              <td>23.1</td>
            </tr>
            <tr>
              <td className="planet-name">Saturn</td>
              <td>568</td>
              <td>120,536</td>
              <td>687</td>
              <td>9.0</td>
            </tr>

            {/* Jovian Planets - Ice Giants */}
            <tr>
              <td rowSpan="2" className="subgroup-cell ice-bg">
                Ice Giants
              </td>
              <td className="planet-name">Uranus</td>
              <td>86.8</td>
              <td>51,118</td>
              <td>1271</td>
              <td>8.7</td>
            </tr>
            <tr>
              <td className="planet-name">Neptune</td>
              <td>102</td>
              <td>49,528</td>
              <td>1638</td>
              <td>11.0</td>
            </tr>

            {/* Dwarf Planets */}
            <tr>
              <td colSpan="2" className="group-cell dwarf-bg">
                Dwarf Planets
              </td>
              <td className="planet-name">Pluto</td>
              <td>0.0130</td>
              <td>2,376</td>
              <td>2095</td>
              <td>0.7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
