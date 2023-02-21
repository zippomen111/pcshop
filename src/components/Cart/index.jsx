import style from "./index.module.scss";
import cart from "./../../img/header-cart.png";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <Link to="/cart" className={style.cart}>
            <img className={style.img} src={cart} alt="cart" />
            <span>2</span>
        </Link>
    )
}

export default Cart;