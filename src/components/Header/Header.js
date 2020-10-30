import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";
import {UserLogged, UserMenu} from "./UserMenu";
import {UserStore} from "../../store/stores/user.store";
import {CartStore} from "../../store/stores/cart.store";
import MobileMenu from "./MobileMenu";

const Header = () => {
	const userState = useContext(UserStore);
	const {getProductsCount} = useContext(CartStore);
	const [mobileMenuToggled, setMobileMenuToggled] = useState(false);
	const openMobileMenu = () => {
		setMobileMenuToggled(!mobileMenuToggled);
	}

	const closeMobileMenu = () => {
		setMobileMenuToggled(!mobileMenuToggled);
	}
	return (
		<header className="main-header bg-white py-2 shadow">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col">
						<div className="logo">
							<NavLink to="/" exact className="h3 font-weight-bold text-decoration-none">StoreName</NavLink>
						</div>
					</div>
					<div className="col d-none d-lg-block">
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
						{userState.isAuthenticated && <div className="user-top d-inline-block d-lg-none mr-1">
							<NavLink to="/my-account" className="btn btn-secondary">
								<FontAwesomeIcon icon={faUser}/>
							</NavLink>
						</div>}
						<div className="d-none d-lg-inline-block text-right">
							{!userState.isAuthenticated ? <UserMenu/> : <UserLogged user={userState}/>}
						</div>
					</div>
					<div className="col d-block d-lg-none text-right flex-grow-0">
						<div className="hamburger" onClick={openMobileMenu}>
							<FontAwesomeIcon icon={faBars} size="2x" />
						</div>
					</div>
				</div>
			</div>
			{mobileMenuToggled && <MobileMenu closeMobileMenu={closeMobileMenu} />}
		</header>
	);
};


export default Header;