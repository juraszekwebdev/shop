import React from 'react';

const ProductsTable = props => {
	const {products} = props;
	return (
		<table className="table table-bordered">
			<thead>
			<tr>
				<th>ID</th>
				<th>Product</th>
				<th>Price</th>
				<th>Quantity</th>
			</tr>
			</thead>
			<tbody>
			{products && products.map((item, index) => {
				return (
					<tr key={index}>
						<td>{item.id}</td>
						<td>
							<div className="d-flex align-items-center">
								<div className="image w-25">
									<img src={item.image} alt={item.name}/>
								</div>
								<div className="name">
									{item.name}
								</div>
							</div>
						</td>
						<td>$ {(item.price * item.quantity).toFixed(2)}</td>
						<td>
							{item.quantity}
						</td>
					</tr>
				)
			})}
			</tbody>
		</table>
	);
};

export default ProductsTable;