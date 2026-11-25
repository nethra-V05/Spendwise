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