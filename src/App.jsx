import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import Popular from './components/Popular'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Top_rated from './components/Top_rated'

function App() {

  return (
    <>
      <div className='flex justify-center items-center'>

        <div className='flex justify-center fixed top-0 left-0 right-0 bg-slate-500'>
          <Navbar/>  
        </div>


          <Router>
            <Routes>
              <Route exact path="/" element={<Home />}  />
              <Route path="popular" element={<Popular />} />
              <Route path="top-rated" element={<Top_rated />} />
              <Route path="/*" element={<Error />}  />
            </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
