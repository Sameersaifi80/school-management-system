import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Dashboard() {
  const cards = [
    { title: "Students", value: "124,684", color: "bg-purple-200" },
    { title: "Teachers", value: "12,379", color: "bg-yellow-200" },
    { title: "Staffs", value: "29,300", color: "bg-purple-200" },
    { title: "Awards", value: "95,800", color: "bg-yellow-200" },
  ];

  return (
    <div className="min-h-screen bg-[#f6f6ff] p-3 sm:p-6">

      

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row gap:3">
            <Link className="bg-blue-600 text-white hover:bg-blue-800 rounded p-2" to="teacherreg">For Teacher registration </Link>
            <Link className="bg-yellow-300 hover:bg-yellow-500 rounded p-2" to="registration">For Student registration </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {cards.map((card, index) => (
              <div
              key={index}
              className={`${card.color} rounded-2xl p-5`}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {card.value}
                </h2>
                <p className="mt-2">{card.title}</p>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
            
            <div className="bg-white rounded-3xl p-5 shadow">
              <h2 className="text-xl font-semibold mb-4">
                Students
              </h2>
<div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto border-[15px] sm:border-[20px] border-sky-200 rounded-full"></div>

              <div className="flex justify-around mt-6">
                <div>
                  <h3 className="font-bold">45,414</h3>
                  <p>Boys</p>
                </div>

                <div>
                  <h3 className="font-bold">40,270</h3>
                  <p>Girls</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow col-span-1">
              <h2 className="text-xl font-semibold mb-4">
                Attendance
              </h2>
<div className="h-60 sm:h-72 flex items-end justify-around overflow-x-auto">
                <div className="w-8 h-32 bg-yellow-300 rounded"></div>
                <div className="w-8 h-40 bg-sky-200 rounded"></div>
                <div className="w-8 h-52 bg-yellow-300 rounded"></div>
                <div className="w-8 h-44 bg-sky-200 rounded"></div>
                <div className="w-8 h-60 bg-yellow-300 rounded"></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow">
              <h2 className="text-2xl font-semibold mb-4">
                September 2030
              </h2>

              <div className="grid grid-cols-7 text-center gap-2">
                {["19", "20", "21", "22", "23", "24", "25"].map(
                  (day) => (
                    <div
                    key={day}
                    className={`p-2 rounded ${
                      day === "22"
                      ? "bg-sky-100"
                      : ""
                    }`}
                    >
                      {day}
                    </div>
                  )
                )}
              </div>

              <div className="mt-6 space-y-3">



                {/* {new} */}
                <div className="bg-white rounded-3xl shadow p-6">
  <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>

  <div className="space-y-3">
    <div className="bg-purple-100 p-3 rounded-xl">
      🎉 Annual Function - 15 Sep
    </div>

    <div className="bg-yellow-100 p-3 rounded-xl">
      🏃 Sports Day - 20 Sep
    </div>

    <div className="bg-blue-100 p-3 rounded-xl">
      👨‍👩‍👧 Parent Meeting - 25 Sep
    </div>

    <div className="bg-green-100 p-3 rounded-xl">
      📝 Mid-Term Exams - 30 Sep
    </div>
  </div>
</div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}