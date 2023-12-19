import React, {useState} from 'react';
import "./signup.css";
import MainButton from "../../../Components/MainButton/MainButton";
import { Link } from "react-router-dom";
import CheckBox from "../../../Components/CheckBox/CheckBox";

function Signup() { 
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [fullname, setName] = useState('');
	return (
	<>
	<div className="signup">
	<h1>Signup</h1>
	<form>
			<input type="email"
						 value={email}
						 onChange={(e) => setEmail(e.target.value)}
						 placeholder="Enter Email"
			/>
			<input type="fullname"
						 value={fullname}
						 onChange={(e) => setName(e.target.value)}
						 placeholder="Full Name"
			/>
			<input id="password" type="password"
						 value={password}
						 onChange={(e) => setPassword(e.target.value)}
						 placeholder="Password"
			/>
			<p>Do you own a restaurant?</p>
			<div><select>
       <option value="Please select">Please select</option>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
     </select>
   		</div>
		 <div>
		 <p>Agree to the terms and conditions<CheckBox></CheckBox></p>
		 </div>
	</form>
	<MainButton>Continue</MainButton>
	<Link to="/login" style={{ margin: '10px'}}>Already have an account?</Link>
	</div>
	</>
	);
};

export default Signup;
