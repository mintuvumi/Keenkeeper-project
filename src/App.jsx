import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import Navbar from "./components/Navbar";
import FriendDetails from "./pages/FriendDetails";
import Footer from "./components/Footer"; // ✅ add this

// ✅ context
import { TimelineProvider } from "./context/TimelineContext";

function App() {
  return (
    <TimelineProvider>

      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <div className="min-h-screen flex flex-col">

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/friend/:id" element={<FriendDetails />} />
          </Routes>
        </div>

        {/* ✅ Footer সব page এ নিচে থাকবে */}
        <Footer />

      </div>

    </TimelineProvider>
  );
}

export default App;