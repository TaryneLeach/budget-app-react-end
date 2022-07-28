import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h2>Welcome To Your Budget App!</h2>
			<img clasName="home-gif" src='https://c.tenor.com/oZxBz4rQMvcAAAAC/tenor.gif' alt=''></img>
            <br></br>
			<Link className="click-link"to='/transactions'>Click to review your monthly transactions!</Link>
		</div>
	);
};

export default Home;
