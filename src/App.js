import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Comics from "./Pages/Comics";
import Error404 from "./Pages/Error404";
import Header from "./Components/Header";
import useFetch from "./Hooks/useFetch";

function App() {
  const exampleApi = useFetch(
    "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8e67284170c9c7fc7e385f9de69aa5b9&hash=7de38110c0f90cc82da3aa65edc0bd53"
  );
  console.log(exampleApi);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/inicio" exact element={<Home />} />
          <Route path="/series" exact element={<Series />} />
          <Route path="/comics" exact element={<Comics />} />
          <Route element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
