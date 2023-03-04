import style from './index.module.scss';
import search from './../../img/search.svg';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import debounce from 'lodash.debounce';

const Search = () => {
    const delayAdd = debounce((el) => {
        dispatch(setSearchValue(el.target.value))

    }, 1000)
    const dispatch = useDispatch()
    return (
        <div className={style.search}>
            <img src={search} className={style.svg} alt="search"></img>
            <input onChange={delayAdd} className="input" type="text" placeholder="search item" />
        </div>
    )
}

export default Search;  
