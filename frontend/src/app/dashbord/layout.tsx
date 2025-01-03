import DefaultCard from "@/components/common/Card/DefaultCard";

export default function Layout({ children }: any) {
  return (
    <DefaultCard>
      {/* Header */}
      <header className="flex justify-between shadow-md sticky top-0 bg-white z-10">
        {/* Left Side - Gradient Section */}
        <div className="flex items-center bg-gradient-to-r from-white to-violet-500 p-4 w-4/6">
          <h1 className="font-bold text-lg text-blue-500">HRM</h1>
          <h1 className="ml-4 text-xl font-bold">
            Admin <span className="text-blue-500">👋</span>
          </h1>
        </div>

        {/* Right Side - White Section */}
        <div className="flex items-center justify-end bg-white p-4 w-1/2">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700">
              English
            </a>
            <a href="#" className="text-gray-700">
              Notifications
            </a>
            <a href="#" className="text-gray-700">
              Messages
            </a>
            <div className="flex items-center space-x-2">
              <img
                src="/images/profile.png"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-700">Jhon Smith</span>
              <span className="text-green-500">●</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg h-screen sticky top-0 overflow-y-auto">
          <ul className="space-y-4 p-4">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Employee
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Employee Profile
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Designations
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 font-bold">
                Admin Attendance
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Biometric Attendance
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Office Loan
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <main className="p-4 space-y-8">{children}</main>
        </div>

        {/* Calendar */}
        <div className="w-64 bg-white shadow-lg p-4 sticky top-0">
          <h2 className="font-bold text-lg mb-4">Calendar</h2>
          <div>
            <img src="/images/calenderimg.jpg" alt="Calendar" />
          </div>
        </div>
      </div>
    </DefaultCard>
  );
}
