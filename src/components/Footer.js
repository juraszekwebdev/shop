import React from 'react';

const Footer = () => {
	return (
		<footer className="footer py-4 bg-darker text-white">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<h5 className="h5">O nas</h5>
						<hr className="bg-secondary"/>
						<p className="m-0">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus accusantium adipisci
							aperiam atque blanditiis culpa delectus facere hic illo, ipsa laboriosam magni molestias non
							nulla sequi sint, sit sunt.
						</p>
					</div>
					<div className="col-lg-4">
						<h5 className="h5">Nawigacja</h5>
						<hr className="bg-secondary"/>
						<a href="/" className="d-block mb-2 text-white">Home</a>
						<hr className="bg-light"/>
						<a href="/products" className="d-block mb-2 text-white">Products</a>
						<hr className="bg-light"/>
						<a href="/contact" className="d-block text-white">Contact</a>

					</div>
					<div className="col-lg-4">
						<h5 className="h5">Dane kontaktowe</h5>
						<hr className="bg-secondary"/>
						<address>
							<strong>Shop Corp.</strong><br/>
							813 Howard Street<br/>
							Oswego NY 13126<br/>
							USA<br/>
							<br/>
							Phone: 904-307-7958<br/>
							Mail: contact@shop.com
						</address>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;