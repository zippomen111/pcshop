const Sort = () => {
    return (
        <div className="sort">
            <label htmlFor="sort__option">Sort by: </label>
            <select id="sort__option">
                <option value="volvo">Price</option>
                <option value="saab">Date</option>
                <option value="opel">Popular</option>
            </select>
        </div>
    )
}

export default Sort;