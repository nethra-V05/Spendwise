import React from "react";
function Dashboard(){

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold mb-6">
        SpendWise Dashboard
      </h1>
      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-white p-4">
          <h2 className="text-gray-500">Total Income</h2>
          <p className="font-bold text-green-500">₹25,000</p>
        </div>

        <div className="bg-white p-4">
          <h2 className="text-gray-500">Total Expenses</h2>
          <p className="font-bold text-red-500">₹10,500</p>
        </div>

        <div className="bg-white p-4">
          <h2 className="text-gray-500">Balance</h2>
          <p className="font-bold">₹12,500</p>
        </div>

        <div className="bg-white p-4 ">
          <h2 className="text-gray-500">Budget Remaining</h2>
          <p className="font-bold text-blue-500">₹2,500</p>
        </div>

      </div>

      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-3">
          Notifications
        </h2>

        <p className="text-yellow-600">
           Shopping budget is almost exceeded!
        </p>

        <p className="text-green-600 mt-2">
           You are within your monthly budget.
        </p>
      </div>

    </div>
  );
}


export default Dashboard;