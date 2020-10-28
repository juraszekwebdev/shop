import React from 'react';
import ProductsList from "../components/ProductsList";

const Home = () => {
	return (
		<div className="page-wrapper">
			<section className="py-5">
				<div className="container">
					<div className="section-heading mb-5 text-center">
						<h3 className="h3 m-0 font-weight-bold">Products</h3>
					</div>
				</div>
				<ProductsList/>
			</section>
		</div>
	);
};

export default Home;