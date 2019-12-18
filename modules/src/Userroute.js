import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const Userroute = ({ component:Component,...rest }) => (
	<Route 
		{...rest}
		render={props =>
			typeof cookies.get('user_info')!=="undefined" ? (
				<Component {...props} {...rest} />
			) : (
				<Redirect
					to={{
						pathname : '/'
					}}
				/>
			)
		}
	/>
);


export const Adminroute = ({ component:Component,...rest }) => (
	<Route 
		{...rest}
		render={props =>
			typeof cookies.get('user_info') !=='undefined' && cookies.get('user_info').user_type ==="A" ? (
				<Component {...props} {...rest} />
			) : (
				<Redirect
					to={{
						pathname : '/user/home',
					}}
				/>
			)
		}
	/>
);