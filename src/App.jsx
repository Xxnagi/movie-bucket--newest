import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { Header } from "./component/Header";
import Watchlist from "./Pages/Watchlist";
import Add from "./Pages/Add";
import Watched from "./Pages/Watched";
import Movies from "./Pages/Movies";
import Detail from "./Pages/Detail";
import Bookmark from "./Pages/Bookmark";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/add" element={<Add />} />=
          <Route path="/watched" element={<Watched />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/detail/:id" element={<Detail />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
