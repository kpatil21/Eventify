import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";


export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Dashboard Grid */}
      <div className="grid lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex min-h-screen flex-col">
          {/* Top Navigation */}
          <Topbar />

          {/* Page Content */}
          <main className="flex-1 p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}