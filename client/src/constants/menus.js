import {
  FaHome,
  FaCalendarAlt,
  FaPlusCircle,
  FaClipboardList,
  FaUsers,
  FaTags,
  FaUser,
  FaCog,
} from "react-icons/fa";

/* ===========================
   Parent Menu
=========================== */

export const parentMenu = [
  {
    title: "Dashboard",
    path: "/parent/dashboard",
    icon: FaHome,
  },
  {
    title: "Browse Events",
    path: "/events",
    icon: FaCalendarAlt,
  },
  {
    title: "My Bookings",
    path: "/parent/bookings",
    icon: FaClipboardList,
  },
  {
    title: "Profile",
    path: "/parent/profile",
    icon: FaUser,
  },
  {
    title: "Settings",
    path: "/parent/settings",
    icon: FaCog,
  },
];

/* ===========================
   Organizer Menu
=========================== */

export const organizerMenu = [
  {
    title: "Dashboard",
    path: "/organizer/dashboard",
    icon: FaHome,
  },
  {
    title: "New Event",
    path: "/organizer/events/create",
    icon: FaPlusCircle,
  },
  {
    title: "My Events",
    path: "/organizer/events",
    icon: FaCalendarAlt,
  },
  {
    title: "Participants",
    path: "/organizer/participants",
    icon: FaUsers,
  },
  {
    title: "Profile",
    path: "/organizer/profile",
    icon: FaUser,
  },
  {
    title: "Settings",
    path: "/organizer/settings",
    icon: FaCog,
  },
];

/* ===========================
   Admin Menu
=========================== */

export const adminMenu = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: FaHome,
  },
  {
    title: "Events",
    path: "/admin/events",
    icon: FaCalendarAlt,
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: FaUsers,
  },
  {
    title: "Categories",
    path: "/admin/categories",
    icon: FaTags,
  },
  {
    title: "Bookings",
    path: "/admin/bookings",
    icon: FaClipboardList,
  },
  {
    title: "Profile",
    path: "/admin/profile",
    icon: FaUser,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: FaCog,
  },
];