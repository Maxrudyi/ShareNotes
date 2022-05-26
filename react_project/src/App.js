import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Create from "./components/Create/Create";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Note from "./components/Note/Note";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="main">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/home" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/note" element={<Note />}></Route>
          <Route path="/note/:noteURL" element={<Note />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
