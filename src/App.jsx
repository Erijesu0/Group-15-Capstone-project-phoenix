import { useState } from "react";
import Hero from "./Components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <div className="container">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
