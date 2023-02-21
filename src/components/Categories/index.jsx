import { useDispatch, useSelector } from "react-redux"
import { setCategory } from './../../redux/slices/filterSlice'
import "./index.scss"

const Categories = () => {
    const categoryId = useSelector((state) => state.filter.categoryId)
    const dispatch = useDispatch()
    const list = ['PC', 'Keybord', 'Mouse', 'Accessories']
    return (
        <div className="categories">
            <ul className="categories__list">
                {list.map((item, i) => {
                    return (
                        <li
                            key={i}
                            className={categoryId === i ? "active categories__item" : "categories__item"}
                            onClick={() => dispatch(setCategory(i))}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>)
}

export default Categories;