import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import ContentTop from '../components/Content-top';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Item from '../components/Item';
import Skeleton from '../components/Skeleton';

const Home = () => {
    //optimizar state import {...value}
    const categoryId = useSelector((state) => state.filter.categoryId)
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sort = useSelector((state) => state.filter.sort)
    const searchValue = useSelector((state) => state.filter.searchValue)
    const search = `&search=${searchValue}`
    useEffect(() => {
        fetch(`https://62fbd962abd610251c12510e.mockapi.io/PC_Items?${category}&sortBy=${sort}&${search}`)
            .then((response) => response.json())
            .then((data) => {
                setItems(data)
                setIsLoading(false)
            }
            );
    }, [categoryId, category, sort, search, searchValue])
    return (
        <>
            {/* <ContentTop /> */}
            <div className="content-top">
                <div className="container flex-wrap">
                    <Categories />
                    <Sort />
                </div>
            </div>
            <div className="container">
                <div className="items">
                    {
                        isLoading ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
                            : items.map((items) => <Item {...items} key={items.id} />)
                    }
                </div>
            </div>
        </>

    )
}
export default Home;