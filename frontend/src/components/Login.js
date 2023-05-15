import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ setToken }) => {
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Authenticate and get the jwt from backend 
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const loginDetails = {email, password};
        
        fetch('http://localhost:8080/api/v1/auth/authenticate', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginDetails)
        }).then(res => {
            if (!res.ok) {
                throw Error("Could not fetch the data for that resource")
            }
            return res.json();
        }).then( (data)=> {
            console.log('login');
            setToken(data.token);
            console.log(data.token);
            console.log(data.value);
            navigate('/orderhistory');
        })
    }

    return ( 
        <div className="login">
            <form className="login-form" onSubmit={ handleSubmit }>
                <h2>Welcome to DeDessert!</h2>
                <div className="login-inputs">
                    <label>username:</label>
                    <input 
                            type="text" 
                            name="username" 
                            value={email}
                            placeholder="email address" 
                            onChange={(e) => setUsername(e.target.value)}
                            required/>                    
                    <label>password:</label>
                    <input 
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                </div>
                <button>Login</button>
                <span>Not a member? <Link to="/signup">Sign Up</Link></span>
            </form>
        </div>
    );
}
 
export default Login;