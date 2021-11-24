import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Mood from './Components/Mood'
import Entry1 from './Components/EntryPage1'
import App from './Components/Background'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
console.log(process.env.REACT_APP_API_KEY)
const APIkey = process.env.REACT_APP_API_KEY

const firebaseConfig = {
  apiKey: APIkey,
  authDomain: "my-medical-diary-d925e.firebaseapp.com",
  projectId: "my-medical-diary-d925e",
  storageBucket: "my-medical-diary-d925e.appspot.com",
  messagingSenderId: "1001903087964",
  appId: "1:1001903087964:web:a7e92db25f9d9451cf2199",
  measurementId: "G-6Q03F6LPMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function Application() {
  return (
    <div className="Application">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/mood' element={<Mood />} />
          <Route path='/entrypage1' element={<Entry1 />} />
        </Routes>
      </Router>
      <App />
    </div>
  );
}

export default Application;
