import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/slices/filterSlice';
import './index.scss';
import { RootState } from '../../redux/store';
import { FC } from 'react';

const Categories: FC = (): JSX.Element => {
    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    const dispatch = useDispatch()
    const list: string[] = ['All', 'Monitors', 'Mouses', 'Keyboards', 'Headsets']
    return (
        <div className="categories">
            <ul className="categories__list">
                {list.map((item: string, i: number) => {
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