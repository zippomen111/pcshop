import { useState, useEffect } from 'react';
// import ContentTop from '../components/Content-top';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Item from '../components/Item';
import Skeleton from '../components/Skeleton';

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://62fbd962abd610251c12510e.mockapi.io/PC_Items')
            .then((response) => response.json())
            .then((data) => {
                setItems(data)
                setIsLoading(false)
            }
            );
    }, [])
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