import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageNotFound from './pages/PageNotFound'
import Contact from './pages/Contact'
import Werkwijze from './pages/Werkwijze'
import Services from './pages/Services'
import Form from './pages/Form'
import Scroll from './components/topScroll'
import Terms from './pages/Terms'

function App() {
  return (
    <BrowserRouter>
      <Scroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/werkwijze" element={<Werkwijze />}></Route>
        <Route path="/diensten" element={<Services />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
