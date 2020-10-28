import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {UserLogged, UserMenu} from "./UserMenu";
import {UserStore} from "../../store/stores/user.store";
import {CartStore} from "../../store/stores/cart.store";

const Header = () => {
	const userState = useContext(UserStore);
	const {getProductsCount} = useContext(CartStore);
	return (
		<header className="main-header bg-white py-2 shadow">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col">
						<div className="logo">
							<NavLink to="/" exact className="h3 font-weight-bold text-decoration-none">StoreName</NavLink>
						</div>
					</div>
					<div className="col">
						<div className="main-menu">
							<NavLink to="/" exact className="mr-4 text-decoration-none">Home</NavLink>
							<NavLink to="/products" className="mr-4 text-decoration-none">Products</NavLink>
						</div>
					</div>
					<div className="col text-right">
						<div className="cart-top d-inline-block mr-1">
							<div className="products-count">{getProductsCount()}</div>
							<NavLink to="/cart" className="btn btn-darker">
								<FontAwesomeIcon icon={faShoppingCart}/>
							</NavLink>
						</div>
						{!userState.isAuthenticated ? <UserMenu/> : <UserLogged user={userState}/>}
					</div>
				</div>

			</div>
		</header>
	);
};


export default Header;