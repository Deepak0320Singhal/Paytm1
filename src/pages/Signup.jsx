import React from 'react'
import{useNavigate} from 'react-router-dom'

function Signup() {
  const navigate = useNavigate();
  return (
    <div >
      <form action='#'>
        <div>
          <div>
            <h1>Sign Up</h1>
            <p>Enter Your Information to Create an Account</p>
          </div>
        </div>
        <div>
          <h3>First Name</h3>
          <input placeholder='Deepak' onChange={(e) => setFirstName(e.target.value)} />

          <h3>Last Name</h3>
          <input placeholder='Singhal' onChange={(e) => setLastName(e.target.value)} />

          <h3>Email</h3>
          <input placeholder='Deepaksinghal@gmail.com' onChange={(e) => setEmail(e.target.value)} />

          <h3>Password</h3>
          <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button
          onClick={() => {
            if (firstName == "" || lastName == "" || email == "" || password == "") {
              alert("Please fill all the fields");
            }
            else { navigate("/dashboard") }

          }}
        >Signup</button>
        <div>Already have an account? <span onClick={()=>navigate("/signin")}>Login</span></div>
      </form>
    </div>
  )
}

export default Signup