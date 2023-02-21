import style from "./index.module.scss";
import search from "./../../img/search.svg";

const Search = () => {
    return (
        <div className={style.search}>
            <img src={search} className={style.svg} alt="search"></img>
            <input className="input" type="text" placeholder="search item" />
        </div>
    )
}

export default Search;  
