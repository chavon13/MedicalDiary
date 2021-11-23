import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Mood from './Components/Mood'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='mood' element={<Mood />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
