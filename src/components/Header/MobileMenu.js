import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {UserLogged, UserMenu} from "./UserMenu";
import {UserStore} from "../../store/stores/user.store";

const MobileMenu = props => {
	const {closeMobileMenu} = props;
	const userState = useContext(UserStore);

	const onMenuClick = () => {
		closeMobileMenu();
	}

	return (
		<div className="mobile-menu d-block d-lg-none">
			<div className="close-menu" onClick={closeMobileMenu}>
				<FontAwesomeIcon icon={faTimes} size="2x" />
			</div>
			<ul>
				<li>
					<NavLink to="/" onClick={onMenuClick} exact className="text-decoration-none">Home</NavLink>
				</li>
				<li>
					<NavLink to="/products" onClick={onMenuClick} className="text-decoration-none">Products</NavLink>
				</li>
			</ul>
			<div className="text-center mt-3">
				{!userState.isAuthenticated ? <UserMenu/> : <UserLogged user={userState}/>}
			</div>
		</div>
	);
};

export default MobileMenu;