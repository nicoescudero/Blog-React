import './App.css';
import Home from './components/Home';
import Post from './components/Post';
import Whoami from './components/Whoami';
import Social from './components/Social';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/:post" element={<Post/>}/>
        <Route path="/whoami" element={<Whoami/>}/>
        <Route path="/social" element={<Social/>}/>
      </Routes>
    </Router>
  );
}

export default App;
