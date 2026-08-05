import {
  FaClipboardList,
  FaCalendarAlt,
  FaCheckCircle,
  FaHeart,
} from "react-icons/fa";

export const stats = [
  {
    title: "My Bookings",
    value: 12,
    subtitle: "+3 this month",
    icon: FaClipboardList,
    color: "bg-amber-400",
  },
  {
    title: "Upcoming Events",
    value: 3,
    subtitle: "Next 30 days",
    icon: FaCalendarAlt,
    color: "bg-blue-500",
  },
  {
    title: "Completed",
    value: 9,
    subtitle: "Successfully attended",
    icon: FaCheckCircle,
    color: "bg-green-500",
  },
  {
    title: "Wishlist",
    value: 5,
    subtitle: "Saved events",
    icon: FaHeart,
    color: "bg-pink-500",
  },
];

export const upcomingEvents = [
  {
    id: 1,
    title: "Krishna Story Workshop",
    date: "10 Aug 2026",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    title: "Drawing Competition",
    date: "18 Aug 2026",
    time: "4:00 PM",
    status: "Upcoming",
  },
];