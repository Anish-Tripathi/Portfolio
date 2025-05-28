import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Profile from "./components/Profile";
import Academic from "./components/Academic";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { NeonEntry } from "./components/NeonEntry";
import Career from "./components/Career";
import Background from "./components/Background"; // Import the new component

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Space Background - Always present */}
      <Background />

      {/* Content overlay */}
      <div className="relative z-10">
        {!isHomePage && <Navbar />}
        <Routes>
          <Route path="/home" element={<Profile />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/career" element={<Career />} />
          <Route
            path="/"
            element={
              <NeonEntry
                onAnimationComplete={() => console.log("Animation complete!")}
              />
            }
          />
        </Routes>
        {!isHomePage && <Footer />}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
