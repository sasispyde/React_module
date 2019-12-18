import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar(props) {
	return(
		<>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div>
				<ul className="nav navbar-nav">
					<li><Link className="glyphicon glyphicon-home" title="Home" to="/user/home"> Home</Link></li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li><Link to="#" className='glyphicon glyphicon-log-out' title ="Logout" onClick={props.logout} > Logout</Link></li>
				</ul>
			</div>
		</nav>
		</>
	)
};

export function AdminNavbar(props) {
	return(
		<>
		<nav className="navbar navbar-default">
			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul className="nav navbar-nav">
					<li><Link className="glyphicon glyphicon-home" title="Home" to="/admin/home"> Home</Link></li>
					<li><Link className='glyphicon glyphicon-book' to="/admin/add_books"> AddBook</Link></li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li><Link className='glyphicon glyphicon-log-out' title ="Logout" to="#" onClick={props.logout} > Logout</Link></li>
				</ul>
			</div>
		</nav>
		</>
	)
}