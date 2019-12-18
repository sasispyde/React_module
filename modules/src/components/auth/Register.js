import React from 'react';
import axios from '../../axios';
import '../../styles/auth_style/Register.css';
import { registerValidation } from '../../util/validation/validation';
import { Link } from 'react-router-dom';
import history from '../../history';

class Register extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			formFields : {
				username:'',
				email:"",
				password:'',
				phone:''
			},
			auth : false,
			error:{}
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput  = this.handleInput.bind(this);
	}

	async handleSubmit(event) {
		event.preventDefault();
		var data = this.state.formFields;
		var valid = registerValidation(data);
		if(valid.status) {
			await axios.post('/register',data,{header:{'Content-Type': 'application/json'}}).then((responce)=>{
				if(responce.data.status) {
					this.setState({
						formFields : {
							username:'',
							email:"",
							password:'',
							phone:''
						},
						error:''
					})
					history.push('/');			
				} else {
					this.setState({ 
						error:responce.data.error 
					})
				}
			}).catch((err)=> {this.setState({ error: "Server Error" })})
		} else {
			this.setState({
				error:valid.errors
			})
		}
	}

	handleInput(event) {
		var formFields = this.state.formFields;
		formFields[event.target.name] = event.target.value;
		this.setState({
			formFields:formFields
		})
	} 

	render(){
		return (
			<>
			<form className="form-horizontal" onSubmit={this.handleSubmit}>
				<center className="form-group"><h2>Register</h2></center>
				<center className="form-group"><h5>If Already You Have Account <Link to="/">Login</Link></h5></center>
				<div style={{  margin: 'auto',width:"50%",padding: '10px',marginTop: "3%",textAlign:"center"}} >
					<div className="form-group">
					    <label htmlFor="name" className="col-sm-2 control-label">Name</label>
					    <div className="col-sm-4">
					      <input type="text" value={this.state.formFields.username} maxLength='50' onChange={this.handleInput} className="form-control" name="username" id="name" placeholder="Name" />
					    </div>
					    <p>{this.state.error.name}</p>
				  	</div>
				  	<div className="form-group">
					    <label htmlFor="phone" className="col-sm-2 control-label">PhoneNumber</label>
					    <div className="col-sm-4">
					      <input type="text" value={this.state.formFields.phone} maxLength='14' onChange={this.handleInput} className="form-control" name="phone" id="phone" placeholder="Phone Number" />
					    </div>
					    <p>{this.state.error.phone}</p>
				  	</div>
				  	<div className="form-group">
				    	<label htmlFor="email" className="col-sm-2 control-label">Email</label>
				    	<div className="col-sm-4">
				      		<input type="text" value={this.state.formFields.email} maxLength='50' className="form-control" onChange={this.handleInput} name="email" id="email" placeholder="Email" />
				    	</div>
				    	<p>{this.state.error.email}</p>
				  	</div>
				  	<div className="form-group">
				    	<label htmlFor="password" className="col-sm-2 control-label">Password</label>
				    	<div className="col-sm-4">
				      		<input type="password" name="password" value={this.state.formFields.password} maxLength="16" className="form-control" onChange={this.handleInput} id="password" placeholder="Password" />
				    	</div>
				    	<p>{this.state.error.password}</p>
				  	</div>
				  	<div className="form-group">
				    	<div className="col-sm-offset-2 col-sm-4">
				      		<input type="submit" value='submit' className='btn btn-primary' />
				    	</div>
				  	</div>
				</div>
			</form>
			</>
		);
	}
}

export default Register;