import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import './Transactions.css';

const API = process.env.REACT_APP_API_URL;

function Transactions() {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/transactions`)
			.then((res) => setTransactions(res.data))
			.catch((error) => console.log(error));
	});

	// getting the total
	let total = 0;
	transactions.forEach((transaction) => {
		total += transaction.amount;
	});
	return (
		<div>
			<h1>
				{/* {total <= 1200
					? style="color: green"
					: style="color:red" } */}
				Transaction's Total Amount: ${total}
			</h1>
			<br></br>
			<h2>September Transactions Overview</h2>
			<ul className='list'>
				{transactions.map((transaction, index) => {
					return (
						<li key={index} className="list-blocks">
							<p>
								<strong>Date:</strong> {transaction.date}
							</p>
							<p>
								<strong>Item Name:</strong> {transaction.item_name}
							</p>
							<p>
								<strong>Item Cost:</strong> {transaction.amount}
							</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Transactions;
