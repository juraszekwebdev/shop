import Home from "../pages/Home";
import {SignInPage} from "../pages/SignIn";
import {SignUpPage} from "../pages/SignUp";
import {ChangePasswordPage, EditAddressPage, EditPersonalDataPage, MyAccountPage, OrdersPage} from "../pages/MyAccount";
import CartPage from "../pages/Cart/CartPage";
import ProductPage from "../pages/Product/ProductPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import CheckoutCompletePage from "../pages/Checkout/CheckoutCompletePage";
import OrderPage from "../pages/MyAccount/Orders/Order/OrderPage";

export default [
	{
		name: "Home",
		title: "Home",
		path: "/",
		component: Home,
		exact: true,
		requiresAuth: false,
	},
	{
		name: "Sign in",
		title: "Sign in",
		path: "/sign-in",
		component: SignInPage,
		exact: false,
		requiresAuth: false,
	},
	{
		name: "Sign up",
		title: "Sign up",
		path: "/sign-up",
		component: SignUpPage,
		exact: false,
		requiresAuth: false,
	},
	{
		name: "Cart",
		title: "Cart",
		path: "/cart",
		component: CartPage,
		exact: false,
		requiresAuth: false,
	},
	{
		name: "Checkout",
		title: "Checkout",
		path: "/checkout",
		component: CheckoutPage,
		exact: false,
		requiresAuth: true,
	},
	{
		name: "Checkout complete",
		title: "Checkout complete",
		path: "/checkout-complete",
		component: CheckoutCompletePage,
		exact: false,
		requiresAuth: true,
	},
	{
		name: "Products",
		title: "Products",
		path: "/products",
		component: ProductPage,
		exact: false,
		requiresAuth: false,
	},
	{
		name: "My account",
		title: "My account",
		path: "/my-account",
		component: MyAccountPage,
		exact: true,
		requiresAuth: true,
	},
	{
		name: "Change password",
		title: "Change password",
		path: "/my-account/change-password",
		component: ChangePasswordPage,
		exact: false,
		requiresAuth: true,
	},
	{
		name: "Edit address",
		title: "Edit address",
		path: "/my-account/edit-address",
		component: EditAddressPage,
		exact: false,
		requiresAuth: true,
	},
	{
		name: "Edit address",
		title: "Edit address",
		path: "/my-account/edit-personal-data",
		component: EditPersonalDataPage,
		exact: false,
		requiresAuth: true,
	},
	{
		name: "My orders",
		title: "My orders",
		path: "/my-account/orders",
		component: OrdersPage,
		exact: true,
		requiresAuth: true,
	},
	{
		name: "Preview order",
		title: "Preview order",
		path: "/my-account/orders/:id",
		component: OrderPage,
		exact: true,
		requiresAuth: true,
	},
];