import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home'
import Index from './Pages/Index.js';
import Show from './Pages/Show.js';
import New from './Pages/New.js';
import Edit from './Pages/Edit.js';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>

				<Route path="/" element={<Home />}></Route>
				<Route path='/transactions' element={<Index />}></Route>
				<Route path='/transactions/:id' element={<Show />}></Route>
				<Route path='/transactions/new' element={<New />}></Route>
				<Route path='/transactions/:id/edit' element={<Edit />}></Route>
			</Routes>
		</div>
	);
}

export default App;
