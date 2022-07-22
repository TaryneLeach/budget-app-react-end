import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<strong><h2>Budget App</h2></strong>
			<br></br>
			<br></br>
			<Link to='/transactions'>Index</Link>
			&nbsp;
			<Link to='/transactions/new'>New</Link>
			&nbsp;
			<Link to='transactions/:id'>Show</Link>
            &nbsp;
            <Link to='/transactions/new'>Edit</Link>
		</nav>
	);
};

export default NavBar;