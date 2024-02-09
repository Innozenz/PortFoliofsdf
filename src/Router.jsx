import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Landing from "./pages/Landing"
import Projects from "./pages/Projects" 



function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
  );
}

export default App;
