import style from './index.module.scss';
import cart from './../../img/header-cart.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Cart = () => {
    const items = useSelector((state) => state.cart)
    return (
        <Link to="/cart" className={style.cart}>
            <img className={style.img} src={cart} alt="cart" />
            <span>{items.items.length}</span>
        </Link>
    )
}

export default Cart;