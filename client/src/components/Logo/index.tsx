import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="logo" className="max-h-navbar" />
        </Link>
    );
};

export default Logo;
