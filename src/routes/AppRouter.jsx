import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* 可以在这里插入全局 Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} /> */}
      </Routes>
      {/* 可以在这里插入全局 Footer */}
    </BrowserRouter>
  );
}
