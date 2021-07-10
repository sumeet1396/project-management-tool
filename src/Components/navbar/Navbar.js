import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';
import classes from './Navbar.module.scss'

const Navbar = () => {

	const auth = false;
	const links = auth ? <SignedInLink /> : <SignedOutLink />;

	return (
		<header>
			<div className="wrapper">
				<h1><Link to="/" >Project tool</Link></h1>
				{links}
			</div>
		</header>
	);
}

export default Navbar;
