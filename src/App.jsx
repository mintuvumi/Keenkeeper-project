import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import Navbar from "./components/Navbar";
import FriendDetails from "./pages/FriendDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/friend/:id" element={<FriendDetails />} />
      </Routes>
    </>
  );
}

export default App;