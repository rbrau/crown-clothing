import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CROWNLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import {
	NavigationContainer,
	NavLinks,
	NavLink,
	LogoContainer,
} from './navigation.styles';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);
	// console.log(currentUser);
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to={'/'}>
					<CROWNLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to={'/shop'}>SHOP NOW</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							{' '}
							SIGN OUT{' '}
						</NavLink>
					) : (
						<NavLink to={'/authentication'}>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />} {/* if LEFT == TRUE then RIGHT */}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
