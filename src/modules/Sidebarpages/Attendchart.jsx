import { BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer } from "recharts";
const presentCount = students.filter(
  (s) => s.status === "Present"
).length;

const absentCount = students.filter(
  (s) => s.status === "Absent"
).length;

const data = [
  {
    name: "Attendance",
    Present: presentCount,
    Absent: absentCount,
  },
];
const students = [
  { id: 1, name: "Ali", status: "Present" },
  { id: 2, name: "Sameer", status: "Absent" },
  { id: 3, name: "Aman", status: "Present" },
  { id: 4, name: "Rahul", status: "Present" },
];
export default function AttendanceChart() {
  return (
    <div className="bg-white rounded-3xl shadow p-5 h-96">
      <h2 className="text-2xl font-bold mb-4">
        Attendance
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="Present"
            fill="#22c55e"
            radius={[5, 5, 0, 0]}
          />

          <Bar
            dataKey="Absent"
            fill="#ef4444"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}