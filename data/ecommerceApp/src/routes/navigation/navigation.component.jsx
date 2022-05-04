import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import './navigation.style.scss';

const Nav = () => {
	return (
		<Fragment>
			<div className='navBar'>
				<div className='logo-container'>
					<Link to='/'>
						<CrwnLogo className='logo' />
					</Link>
				</div>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					<Link className='nav-link' to='/auth'>
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
			{/* Outlet Allows us to render everything inside Nav Route --> HOME */}
		</Fragment>
	);
};

export default Nav;
