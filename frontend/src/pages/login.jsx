import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginschema } from "../components/formschema/loginschema";

function Login() {
  const navigate=useNavigate();
  const{register,handleSubmit,formState:{errors}}=useForm({
    resolver:zodResolver(loginschema)
  })
  function onSubmit(data){
    console.log(data)
    alert("login successfully")
    navigate("/dashboard",{
      state:data
    })
  }
  return ( 
    <div>
    <div className="h-screen bg-gray-100 flex justify-center items-center p-4">
    <form onSubmit={handleSubmit(onSubmit)}className="bg-white p-8  rounded-lg shadow-md w-80 flex flex-col gap-3">
         <h1 className="font-bold text-center">
            LOGIN
          </h1>
         <input type="text" placeholder="Enter your name:" {...register("name")}
         className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"/>
          <p className="text-red-500 text-sm">{errors.name?.message}</p>

          <input type="email" placeholder="Enter your email:" {...register("email")}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"/>
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <input type="password" placeholder="Enter your password." {...register("password")}
         className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"/>
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          <input type="number" placeholder="Enter your age." {...register("age")}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"/>
          <p className="text-red-500 text-sm">{errors.age?.message}</p>

          <button type="submit" className="bg-blue-500 text-black p-2 rounded hover:big-green-700 font-semibold">Submit</button>
      </form>
      </div>
      </div>
   );
}

export default Login;
