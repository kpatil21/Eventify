import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Events from "../pages/Events";
import EventDetails from "../pages/EventDetails";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<Events />} />
        <Route path="/contact" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}