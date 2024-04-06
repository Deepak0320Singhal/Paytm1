import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div >
            <form action='#'>
                <div>
                    <div>
                        <h1>Sign In</h1>
                        <p>Enter your credentials to access your account</p>
                    </div>
                </div>
                <div>

                    <h3>Email</h3>
                    <input placeholder='deepaksinghal@gmail.com' onChange={(e) => setEmail(e.target.value)} />

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
                >Sign In</button>
                <div>Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span></div>
            </form>
        </div>
    )
}

export default Signin