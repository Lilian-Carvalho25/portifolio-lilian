import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AllProjects from './Pages/AllProjects/AllProjects'

function RouterApp() {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/all-projects" element={<AllProjects />}></Route>
        </Routes>
      </Router>
  
    )
  }
  
  export default RouterApp