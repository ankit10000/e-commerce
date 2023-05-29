import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import "./App.css"
import Login from './user/Login';
import Register from './user/Register';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
