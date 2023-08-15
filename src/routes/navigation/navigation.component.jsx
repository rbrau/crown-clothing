import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CROWNLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);
	// console.log(currentUser);
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to={'/'}>
					<CROWNLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to={'/shop'}>
						SHOP NOW
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={signOutUser}>
							{' '}
							SIGN OUT{' '}
						</span>
					) : (
						<Link className='nav-link' to={'/authentication'}>
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />} {/* if LEFT == TRUE then RIGHT */}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
