import React from 'react';
import { Link } from 'react-router-dom';
import { loginValidation } from '../../util/validation/validation';
import '../../styles/auth_style/Register.css';
import axios from '../../axios';
import history from '../../history';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends React.Component {

	constructor(props){
		super(props);
		this.state={
			formValues:{
				email:'',
				password:''
			},
			error:{}
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput  = this.handleInput.bind(this);
	}
	async handleSubmit(event){
		event.preventDefault();
		var valid = loginValidation(this.state.formValues);
		if(valid.status) {
			await axios.post('/login',this.state.formValues,{header:{'Content-Type': 'application/json'}}).then((responce)=>{
				if(responce.data.status){
					var data = responce.data.data;
					cookies.set('user_info',data,{maxAge:86400,path:"/"});
					if(data.user_type==="A") {
						history.push('/admin/home');
					} else {
						history.push('/user/home');
					}
				} else {
					this.setState({
						error:responce.data.error
					})
				}
			})
		} else {
			this.setState({
				error:valid.errors
			})
		}
	}

	handleInput(event) {
		var formValue = this.state.formValues;
		formValue[event.target.name] = event.target.value;
		this.setState({
			formValues : formValue
		})
	}

	render(){
		return(
			<>
			<div className="cen">
			<form className="form-horizontal" onSubmit={this.handleSubmit}>
				<center className="form-group"><h2>Login</h2></center>
				<center className="form-group"><h5>If You Not Yet Registerd <Link to="/register">Register</Link></h5></center>
				<div style={{  margin: 'auto',padding: '10px',marginTop: "3%",textAlign:"center"}} >
				  	<div className="form-group in-app">
				    	<label htmlFor="email" className="col-sm-2 control-label">Email</label>
				    	<div className="col-sm-4">
				      		<input type="text" value={this.state.formValues.email} maxLength='50' className="form-control" onChange={this.handleInput} name="email" id="email" placeholder="Email" />
				    	</div>
				    	<p>{this.state.error.email}</p>
				  	</div>
				  	<div className="form-group in-app">
				    	<label htmlFor="password" className="col-sm-2 control-label in">Password</label>
				    	<div className="col-sm-4">
				      		<input type="password" name="password" value={this.state.formValues.password} maxLength="16" className="form-control" onChange={this.handleInput} id="password" placeholder="Password" />
				    	</div>
				    	<p>{this.state.error.password}</p>
				  	</div>
				  	<div className="form-group in-but">
				    	<div className="col-sm-offset-2 col-sm-4">
				      		<input type="submit" value='submit' className='btn btn-primary' />
				    	</div>
				  	</div>
				</div>
			</form>
			</div>
			</>
		)
	}
}

export default Login;