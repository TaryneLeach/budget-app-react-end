import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const API = process.env.REACT_APP_API_URL;

function TransactionNew() {
	
	const navigate = useNavigate();

	const [transaction, setTransaction] = useState({
		item_name: '',
		date: '',
		amount: 0,
		from: '',
		category: '',
	});

	const newForm = (event) => {
		setTransaction({ ...transaction, [event.target.id]: event.target.value });
	};

	//handles submitting the form
	const formSubmission = (event) => {
		event.preventDefault();
		axios.post(`${API}/transactions`, transaction).then(() => {
			navigate('/transactions');
		});
	};

	
	return (
		<div>
			<h3>Add A New Item</h3>
			<form onSubmit={formSubmission} className='new-form'>
				<label>
					{' '}
					<input
						type='date'
						id='date'
						value={transaction.date}
						required
						onChange={newForm}
					></input>
				</label>
				<br></br>
				<br></br>
				<label>
					{' '}
					<input
						type='text'
						id='item_name'
						value={transaction.item_name}
						placeholder='Name'
						required
						onChange={newForm}
					></input>
				</label>
				<br></br>
				<br></br>
				<label>
					<input
						type='number'
						id='amount'
						value={transaction.amount}
						required
						placeholder='Amount'
						onChange={newForm}
					></input>
				</label>
				<br></br>
				<br></br>
				<label>
					{' '}
					<input
						type='text'
						id='from'
						value={transaction.from}
						required
						placeholder='From'
						onChange={newForm}
					></input>
				</label>
				<br></br>
				<br></br>
				<select>
					<option>
					Choose a Category
					</option>
					{transaction.category}
				</select>
				<button type='submit'>Complete New Transaction</button>
			</form>
		</div>
	);
}

export default TransactionNew;
