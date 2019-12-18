import React from 'react';
import {AdminNavbar} from '../common/Navbar';

function Home(props) {
	return (
		<>
		<AdminNavbar logout={props.logout} />
		</>
	);
}

export default Home;