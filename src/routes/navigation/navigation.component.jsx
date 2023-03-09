import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

const Navigation = () => {
	return (
		<div>
			<div className='Navigation'>
				<Link className='logo-link' to={'/'}>
					<div>LOGO</div>
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to={'/shop'}>
						SHOP NOW
					</Link>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Navigation;
