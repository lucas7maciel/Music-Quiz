import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Quiz from './pages/quiz/index'
import Home from './pages/home/index'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
