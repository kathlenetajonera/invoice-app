import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <a href="/">
            <img src={logo} alt="logo" className="max-h-navbar" />
        </a>
    );
};

export default Logo;
