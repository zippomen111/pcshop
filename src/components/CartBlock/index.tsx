import style from './index.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearItems, changePrice } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';
import { FC } from 'react';

interface CartItemType {
    id: number;
    imageUrl: string;
    title: string;
    color: string;
    price: number;
}

const CartBlock: FC = (): JSX.Element => {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const onDelete = (id: number, price: number): void => {
        dispatch(removeItem(id));
        dispatch(changePrice(price));
    };
    return (
        <div className="container">
            <button onClick={() => dispatch(clearItems())} className={style.clearBtn}>clear cart</button>
            {
                items.map((item: CartItemType) => {
                    return (
                        <div key={item.id} className={style.root}>
                            <img className={style.img} src={item.imageUrl} alt="icon" />
                            <div className={style.description}>
                                <h3>{item.title}</h3>
                                <p>{item.color}</p>
                            </div>
                            <span>{item.price}$</span>
                            <button onClick={() => onDelete(item.id, item.price)} className={style.button}>Delete</button>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default CartBlock;
