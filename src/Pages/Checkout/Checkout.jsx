import React, {useState} from 'react';
import "./checkout.css";
import PageSplitter from "../../Components/PageSplitter/PageSplitter";
import { Outlet, Link } from "react-router-dom";
import CardContainer from "../../Components/CardContainer/CardContainer";
import MainButton from "../../Components/MainButton/MainButton";



function Login() { 
	const [cardNumber, setCardNumber] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [cvv, setCvv] = useState('');
	return (
	<>
	<div className="checkout">
		<h1>Checkout</h1>
  	<PageSplitter 
    	leftContent={
			<>
			<div>
			<h4 style={{ textAlign: 'left'}}>Your Shopping Cart for Restaurant: The really Cool Restaurant</h4>
			<CardContainer />
			</div>
			</>
			} 
      rightContent={<>
										<div>
										<h4>Calculated Total</h4>
										<p><span>Subtotal:</span>&#x24;3.19 <span>Taxes:</span>&#x24;2.92</p>
										<div><span>Fees: &#x24;3.29</span> Total: &#x24;3.29</div>
										</div>
										<br />
										<form>
										<label>Card Number</label>
										<br />
										<input type="cardNumber"
						 					value={cardNumber}
						 					onChange={(e) => setCardNumber(e.target.value)}
						 					placeholder="Card Number"
										/>
										<br />
										<label>Expiry Date</label>
										<br />
										<input type="expirydate"
						 					value={expiryDate}
										  onChange={(e) => setExpiryDate(e.target.value)}
										  placeholder="MM/YY"
							  		/>
										<br />
										<label>CVV</label>
										<br />
										<input type="cvv"
											style={{marginBottom: '10px'}}
						 					value={cvv}
										  onChange={(e) => setExpiryDate(e.target.value)}
										  placeholder="123"
							  		/>
										</form>
										<MainButton>Continue</MainButton>
										</>
										} 
    />
  </div>
	</>
	);
};

export default Login;
