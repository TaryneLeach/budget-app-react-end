import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBa.jsr';
import Index from './Components/Index.js';
import Show from './Components/Show.js';
import New from './Components/New.js';
import Edit from './Components/Edit.js';

const PORT = process.env.PORT || 3003;
function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/transactions' element={<Index />}></Route>
				<Route path='/transactions/:id' element={<Show />}></Route>
				<Route path='/transactions/new' element={<New />}></Route>
				<Route path='/transactions/new' element={<Edit />}></Route>
			</Routes>
		</div>
	);
}

export default App;
