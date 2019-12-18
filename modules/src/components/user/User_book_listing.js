import React from 'react';

export default function User_book_listing(props){
  	var data = props.books;
  	var take = props.handleTake;
  	const books = Object.keys(data).map(i => data[i]);
	return (
		<>
		<div className="container" style={{textAlign:"canter"}}>
		  <div className="row text-center text-lg-left">
	      { books.map(function(d, idx){
	        return (
		      <div key={d._id} className="col-lg-3 col-md-4 col-md-2 col-6 thumbnail">
		      <img className="img-fluid img-thumbnail" src="https://visualhunt.com/photos/2/eyeglasses-on-open-book.jpg?s=s" alt="" />
		      <ul className="list-unstyled">
		      	<li>Book Name : {d.book_name.substring(0,10)}</li>
		      	<li>Auther Name : {d.auther_name.substring(0,10)}</li>
		      	<li>Price : {d.price}</li>
		      	<li>Status : {parseInt(d.availability_status)!==2 ? 'Available' : 'Out Of Stock'}</li>
		      	<li>Book Type : {d.book_type}</li>
		      	<li>Description : {d.description.substring(0,10)}</li>
		      	<li>{parseInt(d.availability_status)!==2 ? <button className="btn btn-primary" onClick={take(d._id)}>Take</button> : <button disabled className="btn btn-primary">Take</button>}</li>
		      </ul>
		      </div>
	        )
	      })}
		  </div>
	    </div>
		</>
	)
}
