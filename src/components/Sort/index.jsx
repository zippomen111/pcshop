import { setSort } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
const Sort = () => {
    const dispatch = useDispatch();
    return (
        <div className="sort">
            <label htmlFor="sort__option">Sort by: </label>
            <select id="sort__option" onChange={el => {
                dispatch(setSort(el.target.value))
            }}>
                <option value="title">A-Z</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    )

}

export default Sort;