import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import EventDetails from "../pages/EventDetails";
import NotFound from "../pages/NotFound";

// Parent
import ParentDashboard from "../pages/parent/Dashboard";
import MyBookings from "../pages/parent/MyBookings";
import Profile from "../pages/parent/Profile";
import ParentSettings from "../pages/parent/Settings";

// Organizer
import OrganizerDashboard from "../pages/organizer/Dashboard";
import OrganizerEvents from "../pages/organizer/Events";
import NewEvent from "../pages/organizer/NewEvent";
import Participants from "../pages/organizer/Participants";
import OrganizerSettings from "../pages/organizer/Settings";

// Admin
import AdminDashboard from "../pages/admin/Dashboard";
import AdminEvents from "../pages/admin/Events";
import Users from "../pages/admin/Users";
import Categories from "../pages/admin/Categories";
import Bookings from "../pages/admin/Bookings";
import AdminSettings from "../pages/admin/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      
   
      <Route path="/parent" element={<DashboardLayout />}>
      <Route path="dashboard" element={<ParentDashboard />} />
      <Route path="bookings" element={<MyBookings />} />
      <Route path="profile" element={<Profile />} />
       <Route path="settings" element={<ParentSettings />} />
      </Route>

      <Route path="/organizer" element={<DashboardLayout />}>
      <Route path="dashboard" element={<OrganizerDashboard />} />
     <Route path="events" element={<OrganizerEvents />} />
     <Route path="events/create" element={<NewEvent />} />
      <Route path="participants" element={<Participants />} />
    <Route path="settings" element={<OrganizerSettings />} />
      </Route>

      <Route path="/admin" element={<DashboardLayout />}>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="events" element={<AdminEvents />} />
      <Route path="users" element={<Users />} />
       <Route path="categories" element={<Categories />} />
       <Route path="bookings" element={<Bookings />} />
       <Route path="settings" element={<AdminSettings />} />
        </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}