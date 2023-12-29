import {BrowserRouter, Routes , Route} from "react-router-dom";
import Home from  "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import { Navbar } from "./components/Navbar";
import Services from "./page/Services";
import Registration from "./page/Registration";
import Login from "./page/Login";
import Footer from "./page/Footer";
import Error from "./page/Error";
import { Logout } from "./page/Logout";

function App() {

  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login / >} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
