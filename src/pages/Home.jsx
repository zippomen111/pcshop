import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/slices/filterSlice';
import { fetchItemsSlice } from '../redux/slices/itemSlice';
import { Link, useNavigate } from 'react-router-dom';
import qs from 'qs';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Item from '../components/Item';
import Skeleton from '../components/Skeleton';

const Home = () => {
    const { items, status } = useSelector((state) => state.item)
    const { sort, searchValue, categoryId } = useSelector((state) => state.filter)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //providing qs to redux
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilter({ ...params }))
        }
    }, [dispatch])

    //fetching handler
    const fetchItems = async () => {
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''
        dispatch(fetchItemsSlice({ category, search, sort }))
        window.scrollTo(0, 0)
    }
    //fetching data
    useEffect(() => {
        fetchItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort, searchValue, categoryId])


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
            <div className="content-top">
                <div className="container flex-wrap">
                    <Categories />
                    <Sort />
                </div>
            </div>
            <div className="container">
                <div className="items">
                    {
                        status === 'loading' ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
                            : items.map((items) => <Link key={items.id} to={`/item/${items.id}`}><Item {...items} key={items.id} /></Link>)
                    }
                </div>
            </div>
        </>

    )
}
export default Home;