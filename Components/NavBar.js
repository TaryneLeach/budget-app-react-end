import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
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
