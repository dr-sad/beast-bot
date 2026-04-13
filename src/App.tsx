import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { FrameOne } from "./pages/FrameOne";
import { FrameTwo } from "./pages/FrameTwo";
import { ComingSoon } from "./pages/ComingSoon";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/frame-1" element={<FrameOne />} />
      <Route path="/frame-2" element={<FrameTwo />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}
