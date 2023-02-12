import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Home from './pages/home/home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={< Home />}></Route>
          <Route path='movie/:id' element={<h1>Movie Detail Page</h1>}></Route>
          <Route path='movies/:type' element={<h1>Movies List Page</h1>}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
