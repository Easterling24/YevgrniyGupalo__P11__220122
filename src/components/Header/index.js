import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import KasaLogo from '../../assets/kasa.svg';
import './index.css';

function Header() {
	return (
		<header className="nav-container">
			<Link className="logo-link" to="/">
				<img className="logo-image" src={KasaLogo} alt="logo" />
			</Link>
			<nav>
				<Link className="nav-link" to="/">
					Accueil
				</Link>
				<Link className="nav-link" to="/about">
					A propos
				</Link>
			</nav>
		</header>
	);
}

export default Header;
