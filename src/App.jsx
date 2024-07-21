import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MarkdownEditor from "./components/markdownEditor";
import WebEditor from "./components/webEditor";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<WebEditor />} />

          <Route path="/markdown" element={<MarkdownEditor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
