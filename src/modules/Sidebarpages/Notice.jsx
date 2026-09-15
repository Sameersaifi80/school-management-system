import React, { useState } from "react";

export default function Notice() {
  const [search, setSearch] = useState("");

  const notices = [
    {
      id: 1,
      title: "Annual Function",
      category: "Event",
      date: "15 Sep 2030",
      description: "Annual Function will be held in the school auditorium.",
    },
    {
      id: 2,
      title: "Sports Day",
      category: "Sports",
      date: "20 Sep 2030",
      description: "All students are requested to participate.",
    },
    {
      id: 3,
      title: "Parent Meeting",
      category: "Meeting",
      date: "25 Sep 2030",
      description: "Parent Teacher Meeting for all classes.",
    },
    {
      id: 4,
      title: "Mid-Term Exams",
      category: "Exam",
      date: "30 Sep 2030",
      description: "Mid-Term Examination schedule released.",
    },
  ];

  const filteredNotices = notices.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📢 Notice Board</h1>

        <input
          type="text"
          placeholder="Search Notice..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg w-72 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Notice Cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {filteredNotices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold">{notice.title}</h2>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {notice.category}
              </span>
            </div>

            <p className="text-gray-600 mb-4">
              {notice.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                📅 {notice.date}
              </span>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Notice */}
      <div className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">
          🔔 Latest Announcement
        </h2>

        <p>
          Mid-Term Examination schedule has been uploaded.
          Check the notice board regularly for updates.
        </p>
      </div>

    </div>
  );
}