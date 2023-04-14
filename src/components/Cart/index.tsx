import style from './index.module.scss';
import cart from './../../img/header-cart.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './../../redux/store';

const Cart = (): JSX.Element => {
    const items = useSelector((state: RootState) => state.cart);
    return (
        <Link to="/cart" className={style.cart}>
            <img className={style.img} src={cart} alt="cart" />
            <span>{items.items.length}</span>
        </Link>
    )
}

export default Cart;