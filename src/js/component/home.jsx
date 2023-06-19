import React from "react";


//create your first component
const Home = (props) => {
	console.log(props);


	return (
	<>

	<label className="d-flex justify-content-center m-4 ">
        Cuenta atrás <input className="ms-2" name="seconds" type="number" />
    </label>


		<div className="container d-flex bg-dark justify-content-center text-white">

			<div className="card p-3 m-3 ">
				<h1><i className="fa-regular fa-clock d-flex justify-content-center align-middle mt-2"></i></h1>
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
		
		<div className="d-flex justify-content-center" >
			<button type="button" className="btn btn-success rounded-circle m-2"><i class="fa-solid fa-play"></i></button>
			<button type="button" className="btn btn-secondary rounded-circle m-2"><i class="fa-solid fa-pause"></i></button>
			<button type="button" className="btn btn-danger rounded-circle m-2"><i class="fa-solid fa-trash-can"></i></button>
		</div>
	</>	
	);
};

export default Home;
