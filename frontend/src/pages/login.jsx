import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginschema } from "../components/formschema/loginschema";

{/*
import { useState } from 'react'
function Login() {
  const [email, setEmail] = useState(" ")
  const [pass,setPass] = useState(" ")

  const formsubmit=(event)=>{
    event.preventDefault();
    console.log("Printing Inside function")
    console.log(email,pass)
  }
  return(
  <div>
    <form onSubmit={formsubmit}>
      <input type="email" placeholder="Enter your email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input type="password" placeholder="Enter your password" required value={pass} onChange={(e)=>setPass(e.target.value)}></input>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Login
*/}
function Login() {
  const navigate=useNavigate();
  const{register,handleSubmit,formState:{errors}}=useForm({
    resolver:zodResolver(loginschema)
  })
  function onSubmit1(data){
    console.log(data)
    alert("login successfully")
    navigate("/")
  }
  return ( 
    <form onSubmit={handleSubmit(onSubmit1)}>
         <input type="text" placeholder="Enter your name." {...register("name")}/>
          <p>{errors.name?.message}</p>
          <input type="email" placeholder="Enter your email." {...register("email")}/>
          <p>{errors.email?.message}</p>
          <input type="password" placeholder="Enter your password." {...register("password")}/>
          <p>{errors.password?.message}</p>
          <input type="number" placeholder="Enter your age." {...register("age")}/>
          <p>{errors.age?.message}</p>
          <button type="submit">Submit</button>
      </form>
   );
}

export default Login;