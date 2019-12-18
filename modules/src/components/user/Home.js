import React from 'react';
import {Navbar} from '../common/Navbar';
import Listing from './User_book_listing';

function Home(props) {
	return (
		<>
		<Navbar logout={props.logout} />
		<Listing handleTake={props.handleTake} books={props.books}/>
		</>
	);
}

export default Home;