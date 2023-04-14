import style from "./index.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Item {
    imageUrl: string;
    title: string;
    description: string;
}

const FullItem = (): JSX.Element => {
    const [item, setItem] = useState<Item>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const { data } = await axios.get<Item>(`https://62fbd962abd610251c12510e.mockapi.io/PC_Items/${id}`);
                setItem(data);
            } catch (error) {
                alert("Oops! Try again ;)");
            }
        };
        fetchItems();
    }, [id]);

    if (!item) {
        return <div>Loading</div>;
    }

    return (
        <div className={style.root}>
            <img className={style.img} src={item.imageUrl} alt="item" />
            <h3 className={style.title}>{item.title}</h3>
            <p className={style.description}>{item.description}</p>
        </div>
    );
};
export default FullItem;