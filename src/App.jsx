import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutMe, Header, Home, Resume, Contact, Footer } from "./component";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
