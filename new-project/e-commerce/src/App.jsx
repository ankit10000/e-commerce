import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import "./App.css"
// import { ThemeProvider } from 'styled-components';


const App = () => {
  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    {/* </ThemeProvider> */}
    </>
  )
}

export default App