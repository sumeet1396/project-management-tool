import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss'


const SignedOutLink = () => {
	return (
		<ul>
			<li><NavLink to="/">Sign up</NavLink></li>
			<li><NavLink to="/">Login</NavLink></li>
    </ul>
	);
}

export default SignedOutLink;
