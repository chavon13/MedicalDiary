import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Mood from './Components/Mood'
import Entry1 from './Components/EntryPage1'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/mood' element={<Mood />} />
          <Route path='/entrypage1' element={<Entry1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
