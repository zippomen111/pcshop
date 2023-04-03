import style from "./index.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FullItem = () => {
    const [item, setItem] = useState()
    const { id } = useParams()
    useEffect(() => {
        async function fetchItems() {
            try {
                const { data } = await axios.get(`https://62fbd962abd610251c12510e.mockapi.io/PC_Items/` + id)
                setItem(data)
            } catch (error) {
                alert("Oops! Try again ;)")
            }
        }
        fetchItems()
    }, [id])
    if (!item) {
        return "Loading"
    }
    return (
        <div className={style.root}>
            <img className={style.img} src={item.imageUrl} alt="item" />
            <h3 className={style.title}>{item.title}</h3>
            <p className={style.description}>{item.description}</p>
        </div>

    )
}
export default FullItem;