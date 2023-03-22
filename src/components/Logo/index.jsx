import style from './index.module.scss';
import logo from './../../img/header-logo.png';
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <Link to="/">
            <div className={style.logo}>
                <img src={logo} alt="logo" className={style.img} />
                <div className={style.description}>
                    <h1 className={style.title}>PC</h1>
                    <p className={style.text}>The best place to buy!</p>
                </div>
            </div>
        </Link>
    )
}

export default Logo;