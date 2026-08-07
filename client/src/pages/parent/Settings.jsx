import {
  FaMoon,
  FaBell,
  FaShieldAlt,
  FaGlobe,
  FaTrashAlt,
  FaDownload,
} from "react-icons/fa";

export default function Settings() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your account preferences and privacy settings.
        </p>
      </div>

      {/* Appearance */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
            <FaMoon />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Appearance
            </h2>

            <p className="text-slate-500 text-sm">
              Customize how Kaksha Events looks.
            </p>
          </div>

        </div>

        <div className="space-y-5">

          <div className="flex justify-between items-center">

            <div>
              <h3 className="font-medium">Dark Mode</h3>
              <p className="text-sm text-slate-500">
                Switch between light and dark theme.
              </p>
            </div>

            <input type="checkbox" className="w-5 h-5" />

          </div>

          <div className="flex justify-between items-center">

            <div>
              <h3 className="font-medium">Language</h3>
            </div>

            <select className="border rounded-xl px-4 py-2">
              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>
            </select>

          </div>

        </div>

      </div>

      {/* Notifications */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <FaBell />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Notifications
            </h2>

            <p className="text-slate-500 text-sm">
              Choose how you receive updates.
            </p>
          </div>

        </div>

        <div className="space-y-5">

          {[
            "Email Notifications",
            "SMS Notifications",
            "Push Notifications",
            "Marketing Emails",
          ].map((item) => (
            <div
              key={item}
              className="flex justify-between items-center"
            >
              <span>{item}</span>

              <input type="checkbox" defaultChecked />
            </div>
          ))}

        </div>

      </div>

      {/* Privacy */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
            <FaShieldAlt />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Privacy & Security
            </h2>

            <p className="text-slate-500 text-sm">
              Protect your account.
            </p>
          </div>

        </div>

        <div className="space-y-5">

          <div className="flex justify-between items-center">

            <span>Two-Factor Authentication</span>

            <button className="px-4 py-2 rounded-xl border hover:bg-slate-50">
              Enable
            </button>

          </div>

          <div className="flex justify-between items-center">

            <span>Login Alerts</span>

            <input type="checkbox" defaultChecked />

          </div>

        </div>

      </div>

      {/* Account */}

      <div className="bg-white rounded-3xl border border-red-200 shadow-sm p-8">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
            <FaTrashAlt />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-600">
              Account
            </h2>

            <p className="text-slate-500 text-sm">
              Export or permanently remove your account.
            </p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row gap-4">

          <button className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border hover:bg-slate-50">
            <FaDownload />
            Download My Data
          </button>

          <button className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white">
            <FaTrashAlt />
            Delete Account
          </button>

        </div>

      </div>

    </div>
  );
}