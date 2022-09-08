import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Comics from "./Pages/Comics";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/comics" element={<Comics />} />
          <Route element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
