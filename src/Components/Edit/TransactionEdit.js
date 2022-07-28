import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';

const API = process.env.REACT_APP_API_URL;

function TransactionEdit() {
	const [transaction, setTransaction] = useState({
		item_name: '',
		date: '',
		amount: 0,
		from: '',
		category: '',
	});

	let { id } = useParams();
	const navigate = useNavigate();

	const handleUpdate = (event) => {
		axios
			.put(`${API}/transactions/${id}`, transaction)
			.then((res) => {
				setTransaction(res.data);
				navigate(`/transactions/${id}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		axios
			.get(`${API}/transactions/${id}`)
			.then((res) => {
				setTransaction(res.data);
			})
			.catch((error) => console.log(error));
	}, [id]);

	const formEdit = (event) => {
		setTransaction({ ...transaction, [event.target.id]: event.target.value });
	};

	const formSubmission = (event) => {
		event.preventDefault();
		handleUpdate(transaction);
	};

	return (
		<div>
			<form onSubmit={formSubmission} className='edit-form'>
				<label>
					{' '}
					<input
						type='date'
						value={transaction.date}
						onChange={formEdit}
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
						placeholder='name'
						onChange={formEdit}
					></input>
				</label>
				<br></br>
				<br></br>
				<label>
					<input
						type='number'
						id='amount'
						value={transaction.amount}
						placeholder='amount'
						onChange={formEdit}
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
						placeholder='from'
						onChange={formEdit}
					></input>
					<button type='submit'>Complete Edit Form</button>
				</label>
			</form>
		</div>
	);
}

export default TransactionEdit;
