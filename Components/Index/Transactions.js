import axios from 'axios';
import { useState, useEffect } from 'react-router-dom';

const API = REACT_APP_API_URL;

function Transactions() {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/transactions`)
			.then((res) => setTransactions(res.data))
			.catch((error) => console.log(error));
	});
	return (
		<div>
			<h2>Total:</h2>
			<br></br>
			<h3>Monthly Transactions Overview</h3>
			<ul>
				{transactions.map((transaction, index) => {
					return (
						<li key={index}>
							<h3>{transaction.date}</h3>
							<p>{transaction.item_name}</p>
							<p>{transaction.amount}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Transactions;