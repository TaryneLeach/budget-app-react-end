import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TransactionShow.css'

const API = process.env.REACT_APP_API_URL;

function TransactionShow() {
	let id  = useParams();
	const navigate = useNavigate();
	const [transaction, setTransaction] = useState([]);

	// getting api info for the ids I made (did I need to make IDS?)
	useEffect(() => {
		axios
			.get(`${API}/transactions/${id}`)
			.then((res) => {
				setTransaction(res.data);
			})
			.catch((error) => {
				navigate('/404/error');
			});
	}, [id, navigate]);

	// handling deleting a transaction (project prompt doesn't say delete goes here but maybe?)

	const deleteTransaction = () => {
		axios.delete(`${API}/transactions/${id}`).then(() => {
			alert('Transaction deleted!');
		});
	};
	return (
		<div>
			<h2>Transaction Overview Below</h2>
			<ul className="show-list">
				<li>
					<p>Date: {transaction.date}</p>
					<p>Name: {transaction.name}</p>
					<p>Amount: {transaction.amount}</p>
					<p>From: {transaction.from}</p>
					<p>Category: {transaction.category}</p>
				</li>
			</ul>
			<button className='delete-button' onClick={deleteTransaction}>
				Would you like to delete this transaction?
			</button>

			<div className='show-links'>
				<br></br>
				<Link to='/transactions'>Transactions</Link>
				&nbsp;&nbsp;
				<Link to={`/transactions/${id}/edit`}>Edit Form</Link>
				&nbsp;&nbsp;
				<Link to="/transactions/new">New Form</Link>
			</div>
		</div>
	);
}

export default TransactionShow;
