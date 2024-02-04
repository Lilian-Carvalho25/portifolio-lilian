import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'

function RouterApp() {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
        </Routes>
      </Router>
  
    )
  }
  
  export default RouterApp