import './App.css';
import Navbar from './components/Navbar';
// import Handlelogin from './components/Handlelogin';
import Handlesignup from './components/Handlesignup';
import Home from './components/Home';
import ValidatedLoginForm from "./components/ValidatedLoginForm";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alert from './components/Alert';

function App() {
  return (
  
    <Router>
      <Navbar title="Mywebsite"/>
      <Routes>
       <Route exact path="/signup" element={<Handlesignup/>}/>
       {/* <Route exact path="/login" element={<Handlelogin/>}/> */}
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<ValidatedLoginForm/>}/>
      <Route path="/alert" element={<Alert/>}/>
      </Routes>
     </Router>
   
  );
}

export default App;
