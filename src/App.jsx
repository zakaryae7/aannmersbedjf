import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageNotFound from './pages/PageNotFound'
import Contact from './pages/Contact'
import Scroll from './components/topScroll'

function App() {
  return (
    <BrowserRouter>
      <Scroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
