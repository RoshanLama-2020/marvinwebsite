import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Layout from './components/Layout';
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhyUs from './pages/WhyUs';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="whyus" element={<WhyUs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
