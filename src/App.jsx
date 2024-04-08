import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={"Home"} />
          <Route path="/about" Component={"About"} />
          <Route path="/projects" Component={"Projects"} />
          <Route path="/contact" Component={"Contact"} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
