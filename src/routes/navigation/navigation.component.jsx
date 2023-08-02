import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as CROWNLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
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
					<Link className='nav-link' to={'/authentication'}>
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
