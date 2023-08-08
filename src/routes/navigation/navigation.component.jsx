import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CROWNLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const signOutHandler = async () => {
		await signOutUser();
		setCurrentUser(null);
	};
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
						<span className='nav-link' onClick={signOutHandler}>
							{' '}
							SIGN OUT{' '}
						</span>
					) : (
						<Link className='nav-link' to={'/authentication'}>
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
