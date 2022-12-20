import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Quiz from './pages/quiz/index'
import Home from './pages/home/index'
import Artista from './pages/artista/index'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/artista" element={<Artista />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
