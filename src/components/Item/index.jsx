import { useState } from 'react';
import './index.scss';


const Item = ({ imageUrl, title, price, description, colors }) => {
    const [isActive, setActive] = useState(0)
    return (
        <div className="item">
            <img className="item__img" src={imageUrl} alt="article" />
            <div className="item__color">
                {
                    colors.map((item, i) => {
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
            <button className="item__buy">Buy</button>
        </div>
    )
}

export default Item;