import React from "react";
import { useForm } from "react-hook-form";

function Budget() {
  const {register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Budget created successfully!");
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col gap-3"
      >
        <h1 className="font-bold text-center ">
          CREATE BUDGET
        </h1>

        <select
          {...register("category", { required: "Select a category" })}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"
        >
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Education">Education</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Bills">Bills</option>
          <option value="Others">Others</option>
        </select>

        <p className="text-red-500 text-sm">
          {errors.category?.message}
        </p>

        <input type="number"placeholder="Enter budget amount"{...register("amount", { required: "Amount is required" })}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"/>
        <p className="text-red-500 text-sm">
          {errors.amount?.message}
        </p>

        <input type="month"{...register("month", { required: "Month is required" })}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"/>
        <p className="text-red-500 text-sm">
          {errors.month?.message}
        </p>

        <button type="submit"className="bg-blue-500 text-white p-2 rounded hover:bg-green-700 font-semibold">
          Create Budget
        </button>
      </form>
    </div>
  );
}

export default Budget;