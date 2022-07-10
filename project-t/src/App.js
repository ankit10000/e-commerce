import './App.css';
import Navbar from './components/Navbar';
import Handlelogin from './components/Handlelogin';
import Handlesignup from './components/Handlesignup';
import Home from './components/Home';
import Profile from './components/Profile';
// import ValidatedLoginForm from "./components/ValidatedLoginForm";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Alertbox from './components/Alertbox';
// import Alert from './components/Alert';

function App() {
  return (
  
    <Router>
      <Navbar title="Mywebsite"/>
      <Routes>
       <Route exact path="/signup" element={<Handlesignup/>}/>
       <Route exact path="/signin" element={<Handlelogin/>}/>
       <Route exact path="/profile" element={<Profile/>}/>
       <Route path="/" element={<Home/>}/>
       {/* <Route path="/login" element={<ValidatedLoginForm/>}/> */}
      {/* <Route path="/alert" element={<Alert/>}/> */}
      </Routes>
     </Router>
   
  );
}

export default App;
