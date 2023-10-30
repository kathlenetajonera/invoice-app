import Logo from '../Logo';
import Toggle from './Toggle';
import Avatar from './Avatar';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 bottom-0 bg-navbar rounded-r-navbar w-navbar flex flex-col items-center justify-between z-20">
            <Logo />

            <div className="w-full">
                <Toggle />
                <Avatar />
            </div>
        </nav>
    );
};

export default Navbar;
