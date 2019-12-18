import React from 'react';
import {AdminNavbar} from '../common/Navbar';

class Add_book extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			formValue : {
				book_name:'',
				auther_name:'',
				descriprion:'',
				price:'',
				status :'',
				available_date: new Date(),
				image:''
			},
			error:{}
		};
	}

	handleSubmit(event){
		console.log(this.state.formValue);
	}

	handleInput(event){
		var form_value = this.state.formValue;
		form_value[event.target.name] = event.target.value;
		this.setState({
			formValue : form_value
		})
	}

	render(){
		return(
			<>
			<AdminNavbar logout={this.props.logout} />
			<center><h2>Add Book</h2></center>
			<div style={{  margin: 'auto',width: '50%',padding: '10px',marginTop: "3%",textAlign:"center"}} >
				<form className="form-horizontal" onSubmit={this.handleSubmit}>
					<div className="form-group">
					    <label htmlFor="book_name" className="col-sm-2 control-label">Book Name</label>
					    <div className="col-sm-10">
					      <input type="text" value={this.state.formValue.book_name} maxLength='50' onChange={this.handleInput} className="form-control" name="username" id="book_name" placeholder="Book Name" />
					    </div>
					    <p>{this.state.error.book_name}</p>
				  	</div>
				  	<div className="form-group">
					    <label htmlFor="auther_name" className="col-sm-2 control-label">Authername</label>
					    <div className="col-sm-10">
					      <input type="text" value={this.state.formValue.auther_name} maxLength='14' onChange={this.handleInput} className="form-control" name="auther_name" id="auther_name" placeholder="Auther Name" />
					    </div>
					    <p>{this.state.error.auther_name}</p>
				  	</div>
				  	<div className="form-group">
					    <label htmlFor="price" className="col-sm-2 control-label">Price</label>
					    <div className="col-sm-10">
					      <input type="text" value={this.state.formValue.price} maxLength='14' onChange={this.handleInput} className="form-control" name="price" id="price" placeholder="Price" />
					    </div>
					    <p>{this.state.error.price}</p>
				  	</div>
				  	<div className="form-group">
					    <label htmlFor="descriprion" className="col-sm-2 control-label">Descriprion</label>
					    <div className="col-sm-10">
					    	<textarea className="form-control" id="descriprion" maxLength='200' placeholder="Descriprion" onChange={this.handleInput} name="descriprion" rows="3">{this.state.formValue.descriprion}</textarea>
						</div>
						<p>{this.state.error.descriprion}</p>
					</div>
				  	<div className="form-group">
				    	<div className="col-sm-offset-2 col-sm-10">
				      		<input type="submit" value='submit' className='btn btn-primary' />
				    	</div>
				  	</div>
				</form>
			</div>
			</>
		);
	}
}

export default Add_book;