import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import FriendDetails from "./pages/FriendDetails";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Context
import { TimelineProvider } from "./context/TimelineContext";

function App() {
  return (
    <TimelineProvider>

      {/* 🔥 Full Layout */}
      <div className="flex flex-col min-h-screen">

        {/* 🔝 Navbar */}
        <Navbar />

        {/* 🔄 Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/friend/:id" element={<FriendDetails />} />
          </Routes>
        </main>

        {/*Footer (All Pages) */}
        <Footer />

      </div>

    </TimelineProvider>
  );
}

export default App;
