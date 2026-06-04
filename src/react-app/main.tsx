import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongList from "./pages/SongList";
import SongView from "./pages/SongView";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/songs/:id" element={<SongView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
