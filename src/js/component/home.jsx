import React from "react";


//create your first component
const Home = (props) => {
	console.log(props);


	return (

		<div className="container d-flex bg-dark justify-content-center text-white">

		<div className="card p-3 m-3 ">
			<h1><i class="fa-regular fa-clock"></i></h1>
		</div>

		<div className="card p-3 m-3 ">
			<h1>{props.digit6}</h1>
		</div>

		<div className="card p-3 m-3 ">
			<h1>{props.digit5}</h1>
		</div>

		<div className="card p-3 m-3 ">
			<h1>{props.digit4}</h1>
		</div>

		<div className="card p-3 m-3 ">
			<h1>{props.digit3}</h1>
		</div>

		<div className="card p-3 m-3 ">
			<h1>{props.digit2}</h1>
		</div>

		<div className="card p-3 m-3 ">
			<h1>{props.digit1}</h1>
		</div>

	</div>
	);
};

export default Home;
