import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/slices/filterSlice';
import { setItem } from '../redux/slices/itemSlice';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
// import ContentTop from '../components/Content-top';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Item from '../components/Item';
import Skeleton from '../components/Skeleton';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const items = useSelector((state) => state.item.items)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { sort, searchValue, categoryId } = useSelector((state) => state.filter)
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilter({ ...params }))
        }
    }, [dispatch])

    //fetching data
    useEffect(() => {
        axios.get(`https://62fbd962abd610251c12510e.mockapi.io/PC_Items?${category}&sortBy=${sort}${search}`)
            .then(res => {
                dispatch(setItem(res.data))
            })
        setIsLoading(false)
    }, [category, search, sort, dispatch])

    //qs string
    useEffect(() => {
        const qString = qs.stringify({
            category: categoryId,
            sortBy: sort,
            search: searchValue,
        }, { addQueryPrefix: true })
        //insert string to url
        navigate(`${qString}`)
    }, [categoryId, searchValue, sort, navigate])


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