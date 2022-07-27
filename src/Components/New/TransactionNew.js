import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const API = process.env.REACT_APP_API_URL;

function TransactionNew() {
	let id = useParams();
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
		axios
			.put(`${API}/transactions/`, transaction)
			.then(() => {
				navigate('/transactions');
			})
			
	};

	// handling select category option
	// const handleCategory = (event) => {
	// 	setTransaction({ ...transaction, [event.target.category]: event.target.value });
	// };
	

	return (
		<div>
			<form onSubmit={formSubmission} className='new-form'>
				<label>
					{' '}
					<input
						type='date'
						id='date'
						value={transaction.date}
						onChange={newForm}
					></input>
				</label>
				<label>
					{' '}
					<input
						type='text'
						id='item_name'
						value={transaction.item_name}
						placeholder='name'
						onChange={newForm}
					></input>
				</label>
				<label>
					<input
						type='number'
						id='amount'
						value={transaction.amount}
						placeholder='amount'
						onChange={newForm}
					></input>
				</label>
				<label>
					{' '}
					<input
						type='text'
						id='from'
						value={transaction.from}
						placeholder='from'
						onChange={newForm}
					></input>
				</label>
				{/* <select onChange={handleCategory}>
					<option>
					{transaction.category}
					</option>
				</select> */}
				<button type="submit">Complete New Transaction</button>
			</form>
		</div>
	);
}

export default TransactionNew;
