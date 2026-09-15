import React from "react";

export default function Appfooter() {
  return (
    <footer className="bg-blue-700 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        
        <div>
          <h2 className="font-semibold text-lg">
            School Management System
          </h2>
          <p className="text-sm text-blue-100">
            Manage Students, Teachers & Classes Efficiently
          </p>
        </div>

        <div className="mt-3 md:mt-0 text-center">
          <p className="text-sm">
            © 2026 SchoolHub. All Rights Reserved.
          </p>
          <p className="text-xs text-blue-200">
            Developed with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}