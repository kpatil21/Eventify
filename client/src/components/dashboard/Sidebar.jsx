import { NavLink } from "react-router-dom";
import {
  adminMenu,
  organizerMenu,
  parentMenu,
} from "../../constants/menus";

export default function Sidebar() {
  // Get logged-in user
  const user = JSON.parse(localStorage.getItem("user"));

  // Get role
  const role = user?.role || "parent";

  // Select menu based on role
  const menus = {
    parent: parentMenu,
    organizer: organizerMenu,
    admin: adminMenu,
  };

  const menuItems = menus[role] || [];

  return (
    <aside className="hidden lg:flex h-screen w-[280px] flex-col border-r border-slate-200 bg-white">

      {/* Logo */}
      <div className="flex h-[72px] items-center border-b border-slate-200 px-6">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-lg font-bold text-white shadow-md">
            K
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Kaksha Events
            </h2>

            <p className="text-xs text-slate-500">
              Event Management
            </p>
          </div>
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-amber-400 text-white shadow"
                      : "text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  }`
                }
              >
                <Icon className="text-lg" />
                <span>{item.title}</span>
              </NavLink>
            );
          })}

        </div>
      </nav>
      
      {/* Footer */}
   {/* Bottom Section */}
<div className="border-t border-slate-200 p-4 space-y-4">

  {/* User Info */}
  <div className="rounded-xl bg-slate-50 p-3">
    <p className="text-sm font-semibold text-slate-800">
      {user?.name || "Guest User"}
    </p>

    <p className="text-xs capitalize text-slate-500">
      {role}
    </p>
  </div>

  {/* Logout Button */}
  <button
    onClick={() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/";
    }}
    className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-medium text-red-600 transition-all duration-200 hover:bg-red-100"
  >
    🚪
    <span>Logout</span>
  </button>

  {/* Footer */}
  <p className="text-center text-xs text-slate-400">
    Kaksha Events v1.0
  </p>

</div>

    </aside>
  );
}