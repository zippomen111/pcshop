import style from './index.module.scss';

const NotFoundBlock = () => {
    return (
        <h1 className={style.root}>
            <span>😅</span>
            <br />
            <p className={style.description}>Ooops! Something went wrong! </p>
        </h1>
    )
}

export default NotFoundBlock;