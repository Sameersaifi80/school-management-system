import React from "react";
import { Link } from "react-router-dom";

function Appheader() {
  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="bg-white text-blue-700 font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
            SM
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              School Management System
            </h1>
            <p className="text-sm text-blue-100">
              Manage Students, Teachers & Classes
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 font-medium">
            <li>
              <Link to="" className="hover:text-yellow-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="student" className="hover:text-yellow-300">
                Students
              </Link>
            </li>
            <li>
              <Link to="teacher" className="hover:text-yellow-300">
                Teachers
              </Link>
            </li>
            <li>
              <Link to="*" className="hover:text-yellow-300">
                Classes
              </Link>
            </li>
            <li>
              <Link to="*" className="hover:text-yellow-300">
                Reports
              </Link>
            </li>
          </ul>
        </nav>

        {/* Admin Profile */}
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/40"alt="Admin"className="w-10 h-10 rounded-full border-2 border-white"/>
          <div>
            <p className="font-semibold">Admin</p>
            <p className="text-xs text-blue-100">Principal</p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Appheader;