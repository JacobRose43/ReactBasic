import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import { UserContext } from '../../contexts/user.context';
import './navigation.style.scss';

const Nav = () => {
	const { currentUser } = useContext(UserContext);
	return (
		<Fragment>
			<div className='navBar'>
				<Link className='logo-container' to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					{currentUser ? (
						<Link className='nav-link' to='/'>
							SIGN OUT
						</Link>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			<Outlet />
			{/* Outlet Allows us to render everything inside Nav Route --> HOME */}
		</Fragment>
	);
};

export default Nav;
