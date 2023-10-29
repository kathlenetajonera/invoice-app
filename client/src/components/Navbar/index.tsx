import Logo from '../Logo';
import Toggle from './Toggle';
import Avatar from './Avatar';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 bottom-0 bg-navbar rounded-r-[1.25rem] w-navbar flex flex-col items-center justify-between">
            <Logo />

            <div className="w-full">
                <Toggle />
                <Avatar />
            </div>
        </nav>
    );
};

export default Navbar;
