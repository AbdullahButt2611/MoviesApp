import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Home from './pages/home/home.js';
import MovieList from './components/movieList/movieList.js'
import Movie from './pages/movieDetail/movie';
import Error from './pages/error/error.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={< Home />}></Route>
          <Route path='movie/:id' element={< Movie />}></Route>
          <Route path='movies/:type' element={< MovieList />}></Route>
          <Route path='/*' element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
