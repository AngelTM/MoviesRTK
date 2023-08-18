import './App.scss'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetails/MovieDetails";
function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail/>} />
            <Route element={<PageNotFound/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App
