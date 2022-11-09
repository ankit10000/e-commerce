import React ,{ createContext, useReducer } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Handlelogin from './components/Handlelogin';
import Handlesignup from './components/Handlesignup';
import Home from './components/Home';
import Profile from './components/Profile';
import Logout from './components/Logout';
import Forgotpassword from './components/Forgotpassword';
import Resetpassword from './components/Resetpassword';
import Thread from './components/Thread';
import Threadid from './components/Threadid';
import Comment from './components/Comment';

// import ValidatedLoginForm from "./components/ValidatedLoginForm";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { initialState, reducer } from '../src/reducer/UseReducer';
// import Alertbox from './components/Alertbox';
// import Alert from './components/Alert';
export const UserContext = createContext();

const Routing =()=>{
  return (
    <Routes>
     <Route exact path="/signup" element={<Handlesignup/>}/>
     <Route exact path="/comment" element={<Comment/>}/>
     <Route exact path="/thread" element={<Thread/>}/>
     <Route exact path="/threadid" element={<Threadid/>}/>
     <Route exact path="/signin" element={<Handlelogin/>}/>
     <Route exact path="/profile" element={<Profile/>}/>
     <Route exact path="/logout" element={<Logout/>}/>
     <Route exact path="/reset" element={<Resetpassword/>}/>
     <Route exact path="/forgot" element={<Forgotpassword/>}/>
     <Route path="/" element={<Home/>}/>
     {/* <Route path="/login" element={<ValidatedLoginForm/>}/> */}
    {/* <Route path="/alert" element={<Alert/>}/> */}
    </Routes>
  )
}

function App() {

const [state, dispatch] = useReducer(reducer, initialState);

  return (

  <>
  <UserContext.Provider value={{state, dispatch}}>
    <Router>
      <Navbar title="Mywebsite"/>
      <Routing />
     </Router>
  </UserContext.Provider>
   </>
  );
}

export default App;
