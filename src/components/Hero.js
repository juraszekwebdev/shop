import React from 'react';
import productImg from "../assets/images/product.jpg";
import {NavLink} from "react-router-dom";

const Hero = () => {
	return (
		<div className="hero py-8 bg-dark text-white">
			<div className="container h-100">
				<div className="row h-100 align-items-center">
					<div className="col-lg-6">
						<h1 className="h1 font-weight-bold">Welcome in our Shop!</h1>
						<p className="mb-4">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam architecto culpa
							esse
							et expedita id officia quisquam, sit ut. Dicta dolor doloribus, ea ex pariatur quae quis
							quisquam. Magni!
						</p>
						<NavLink to="/products" className="btn btn-lg btn-secondary w-50">
							<strong>Check our products</strong>
						</NavLink>
					</div>
					<div className="col-lg-6">
						<img src={productImg} alt=""/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;