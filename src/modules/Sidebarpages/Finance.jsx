import React from "react";

const stats = [
  { label: "Total Fees Collected", value: "₹5,42,000", color: "bg-green-100 text-green-700" },
  { label: "Total Expenses", value: "₹3,01,000", color: "bg-red-100 text-red-700" },
  { label: "Pending Dues", value: "₹1,86,500", color: "bg-yellow-100 text-yellow-700" },
];

const transactions = [
  { name: "Aarav Sharma", type: "Fee Payment", amount: "+₹45,000", status: "Paid" },
  { name: "Lab Equipment", type: "Expense", amount: "-₹68,500", status: "Paid" },
  { name: "Meera Nair", type: "Fee Payment", amount: "+₹12,000", status: "Paid" },
  { name: "Staff Salary", type: "Expense", amount: "-₹8,42,000", status: "Paid" },
  { name: "Kabir Singh", type: "Fee Payment", amount: "+₹38,000", status: "Pending" },
];

export default function Finance() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Finance</h1>
      <p className="text-gray-500 mb-6">Overview of school fees and expenses</p>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {stats.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className={`text-xl font-bold mt-1 px-2 py-1 rounded inline-block ${item.color}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Name</th>
              <th className="py-2">Type</th>
              <th className="py-2">Status</th>
              <th className="py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => (
              <tr key={index} className="border-b last:border-0">
                <td className="py-2">{t.name}</td>
                <td className="py-2">{t.type}</td>
                <td className="py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      t.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
                <td
                  className={`py-2 text-right font-medium ${
                    t.amount.startsWith("-") ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}