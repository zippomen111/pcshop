import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import './index.scss';

interface ItemProps {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    description: string;
    colors: string[];
}

const Item = ({ id, imageUrl, title, price, description, colors }: ItemProps) => {
    const [isActive, setActive] = useState<number>(0)
    const dispatch = useDispatch()
    const onClickAdd = () => {
        const cartItem = {
            id,
            imageUrl,
            title,
            price,
            color: colors[isActive]
        }
        dispatch(addItem(cartItem))
    }
    return (
        <div className="item">
            <img className="item__img" src={imageUrl} alt="article" />
            <div className="item__color">
                {
                    colors.map((item: string, i: number) => {
                        return (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={isActive === i ? "item__colors active" : "item__colors"}>
                                {item}
                            </button >
                        )
                    })
                }
            </div>
            <h3 className="item__title">{title}</h3>
            <p className="item__description">{description}</p>
            <span className="item__price">{price}$</span>
            <button onClick={onClickAdd} className="item__buy">Buy</button>
        </div>
    )
}

export default Item;