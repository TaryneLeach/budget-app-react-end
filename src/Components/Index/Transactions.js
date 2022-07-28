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

	const total = () => {
		let sum = 0;
		for (let transaction of transactions) {
			sum += parseInt(transaction.amount);
		}
		return sum;
	};

	const accountTotal = total();

	//   attempting to change total colors
	const totalColor = (accountTotal) => {
		if (accountTotal < 1000) {
			return 'red';
		} else if (accountTotal > 1000) return 'green';
		else {
			return 'beige';
		}
	};

	return (
		<div>
			<h1>
				Bank Account Total:{' '}
				<span className={totalColor(accountTotal)}>${accountTotal}</span>
			</h1>
			<br></br>
			<h2>September Transactions Overview</h2>
			<ul className='list'>
				{transactions.map((transaction, index) => {
					return (
						<li key={index} className='list-blocks'>
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
