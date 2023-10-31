import Logo from '../Logo';
import Toggle from './Toggle';
import Avatar from './Avatar';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 bottom-0 bg-navbar rounded-r-navbar w-navbar flex flex-col items-center justify-between z-20 lg:w-full lg:h-navbar lg:flex-row lg:rounded-none">
            <Logo />

            <div className="w-full lg:w-auto lg:flex lg:items-center">
                <Toggle />
                <Avatar />
            </div>
        </nav>
    );
};

export default Navbar;
