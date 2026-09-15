import React, { useState } from "react";

export default function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ali", class: "10th", status: "Present" },
    { id: 2, name: "Sameer", class: "11th", status: "Absent" },
    { id: 3, name: "Aman", class: "12th", status: "Present" },
    { id: 4, name: "Rahul", class: "10th", status: "Present" },
  ]);

  const updateAttendance = (id, value) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, status: value } : s
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">
          Attendance Management
        </h1>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Present</h2>
            <p className="text-3xl font-bold text-green-600">
              {students.filter((s) => s.status === "Present").length}
            </p>
          </div>

          <div className="bg-red-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Absent</h2>
            <p className="text-3xl font-bold text-red-600">
              {students.filter((s) => s.status === "Absent").length}
            </p>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Total Students</h2>
            <p className="text-3xl font-bold text-blue-600">
              {students.length}
            </p>
          </div>
        </div>

        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Class</th>
              <th className="p-3">Attendance</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b text-center">
                <td className="p-3">{student.id}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.class}</td>

                <td className="p-3">
                  <select
                    value={student.status}
                    onChange={(e) =>
                      updateAttendance(student.id, e.target.value)
                    }
                    className="border p-2 rounded"
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Save Attendance
        </button>
      </div>
    </div>
  );
}