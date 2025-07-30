import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Projects from './pages/Projects';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      </Router>
  );
}

export default App;
