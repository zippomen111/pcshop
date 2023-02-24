import Categories from '../Categories';
import Sort from '../Sort';

const ContentTop = () => {
    return (
        <div className="content-top">
            <div className="container flex-wrap">
                <Categories />
                <Sort />
            </div>
        </div>
    )
}

export default ContentTop;