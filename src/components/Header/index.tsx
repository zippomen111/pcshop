import './index.scss';
import Logo from '../Logo';
import Search from '../Search';
import Cart from '../Cart';


const Header = () => {
    return (
        <div className="header">
            <div className="flex-wrap container">
                <Logo />
                <Search />
                <Cart />
            </div>
        </div>
    )
}

export default Header;