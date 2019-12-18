import React from 'react';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import { Switch, Router, Route } from 'react-router-dom';
import history from './history';
import Userhome from './components/user/Home';
import Adminhome from './components/admin/Home';
import Add_book from './components/admin/Add_book';
import { Userroute,Adminroute } from './Userroute';
import axios from './axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			books:{}
		}
		this.logout = this.logout.bind(this);
		this.handleTake = this.handleTake.bind(this);
	}

	logout(){
		cookies.remove('user_info');
		history.push('/');
	}

	componentDidMount(){
		axios.get('/get_all_books',{header:{'Content-Type': 'application/json'}}).then((responce) => {
			if(responce.data.status){
				this.setState({
					books:responce.data.data
				});
			} else {
				this.setState({
					books:{}
				});
			}
		}).catch((err)=>{throw err});
	}

	handleTake(id){
		console.log(id);
	}

	render() {	
	  return (
	    <>
        <Router history={history}>
	      <div>
	        <Route exact path="/" component={Login} />
	        <Route exact path="/register" component={Register} />
	        <Switch>
	        	<Userroute exact path='/user/home' handleTake={this.handleTake} books={this.state.books} logout={this.logout} component={Userhome} />
	        	<Adminroute exact path='/admin/home' books={this.state.books} logout={this.logout} component={Adminhome} />
        		<Adminroute exact path='/admin/add_books' logout={this.logout} component={Add_book} />
	        </Switch>
	      </div>
	    </Router>
	    </>
	  );
	}
}

export default App;
