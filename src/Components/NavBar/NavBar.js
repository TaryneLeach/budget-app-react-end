import { Link } from 'react-router-dom';
import React from 'react'
import "./NavBar.css"


const NavBar = () => {
	return (
		<nav className="nav-header">
			<strong><h2>
			<img className="nav-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR17vthA5_015otxbbyYuxA_oI00Om6Qj4Kzw&usqp=CAU" alt=""></img>
			
				
				Budget App
				</h2></strong>

			<Link className="nav-links" to="/">Home</Link>
			{/* &nbsp; */}
			<Link className="nav-links" to='/transactions'>Index</Link>
			{/* &nbsp; */}
			<Link className="nav-links" to='/transactions/new'>New</Link>
			{/* &nbsp; */}
			<Link className="nav-links" to='/transactions/id'>Show</Link>
            {/* &nbsp; */}
            <Link className="nav-links" to='/transactions/new/edit'>Edit</Link>
		</nav>
	);
};

export default NavBar;