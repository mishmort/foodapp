import React, {useState} from 'react';
import "./login.css";
import MainButton from "../../Components/MainButton/MainButton";
import { Outlet, Link } from "react-router-dom";

function Login() { 
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
	<>
	<div className="login">
	<h1>Login</h1>
	<form>
			<input type="email"
						 value={email}
						 onChange={(e) => setEmail(e.target.value)}
						 placeholder="Enter Email"
			/>
			<input type="password"
						 value={password}
						 onChange={(e) => setPassword(e.target.value)}
						 placeholder="Password"
			/>
	</form>
	<MainButton>Continue</MainButton>
	<Link style={{ margin: '10px'}}>Forgot your password?</Link>
	<Link to="/signup" style={{width: '100%'}}><MainButton>Make An Account Here</MainButton></Link>
	</div>
	</>
	);
};

export default Login;
