import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

const OrdersList = props => {
	const {list} = props;
	return (
		<div className="col-lg-8">
			<div className="card">
				<div className="card-body">
					<div className="card-title">
						<h5 className="h5">My orders</h5>
						<hr/>
					</div>
					<table className="table table-striped order-table">
						<thead>
						<tr>
							<th>ID</th>
							<th>Products</th>
							<th>Total price</th>
							<th>Actions</th>
						</tr>
						</thead>
						<tbody>
						{list && list.map((item, index) => {
							return (
								<tr key={index}>
									<td>{item.data.orderId}</td>
									<td>
										<ul className="list-unstyled">
											{item.data.products.map((item, index) => {
												return (
													<li key={index}>
														{item.name}
													</li>
												)
											})}
										</ul>
									</td>
									<td>
										$ {item.data.totals}
									</td>
									<td>
										<NavLink
											to={"/my-account/orders/" + item.id}
											className="btn btn-primary"
										>
											<FontAwesomeIcon icon={faEye} />
										</NavLink>
									</td>
								</tr>
							)
						})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default OrdersList;