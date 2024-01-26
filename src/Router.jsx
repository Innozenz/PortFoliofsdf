import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Landing from "./pages/Landing"
/* import Landing from "./pages/Landing"  Add the page later */
/* import Landing from "./pages/Landing"  Add the page later */

import './styles/Main.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          {/*  <Route path='/login' element={<Login />} /> Add the page later */}
          {/*  <Route path='/user' element={<User />} />  Add the page later */}
        </Routes>
      </Router>
  );
}

export default App;
