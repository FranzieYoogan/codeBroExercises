import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header';
import Checkbox from './components/checkbox';
import Home from './components/home';
import Emote from './components/emote';

function App() {

  return (
    <>

        <Router>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/checkbox" element={<Checkbox />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/emote" element={<Emote/>} />
        </Routes>
      </main>
    </Router>
      
    </>
  )
}

export default App
