import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss'


const SignedInLink = () => {
	return (
		<ul className={classes.navList}>
			<li><NavLink to="/">New Project</NavLink></li>
			<li><NavLink to="/">Log Out</NavLink></li>
			<li><NavLink to="/">SR</NavLink></li>
    	</ul>
	);
}

export default SignedInLink;
