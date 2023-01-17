import reactLogo from "assets/react.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

import Navbar from "components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
