import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header';
import Checkbox from './components/checkbox';
import Home from './components/home';

function App() {

  return (
    <>

        <Router>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/checkbox" element={<Checkbox />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </main>
    </Router>
      
    </>
  )
}

export default App
