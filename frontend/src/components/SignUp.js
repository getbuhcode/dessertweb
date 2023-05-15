import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const signupDetails = {firstName, lastName, email, password}
        
        fetch('http://localhost:8080/api/v1/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(signupDetails)
        }).then(res => {
            if (!res.ok) {
                throw Error("Registration is not valid")
            }
            return res.json();
        }).then( (data)=> {
            console.log('registered');
            navigate('/login');
        })
    }

    return ( 
        <div className="signup">
            <form className="signup-form" onSubmit={ handleSubmit }>
                <h2>Become a DeDessert Member</h2>
                <p>Join us to enjoy exclusive discount!</p>
                <div className="labels">
                    <label>First Name:</label>
                    <label>Last Name:</label>
                    <label>Email:</label>
                    <label>Password:</label>
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        name="firstname" 
                        value={firstName}
                        onChange={(e) => setFirstname(e.target.value)}
                        required/><br />
                    <input 
                        type="text" 
                        name="lastname" 
                        value={lastName}
                        onChange={(e) => setLastname(e.target.value)}
                        required/><br />
                    <input 
                        type="email" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/><br />
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required/><br />
                </div>
                <br />
                <button>Confirm</button>
            </form>
        </div>
    );
}
 
export default SignUp;