import s from './Header.module.scss'
import log from './pic/log.svg'
import bin from './pic/bin.svg'
import { Link } from 'react-router-dom';
import { useCategories } from './Header.api';

export const Header = () => {
    const { data: catigories } = useCategories();

    return (
        <header className={`${s.header} container`}>
            <div className={s.wrapper}>
                <h2 className={s.title}>SHOP.CO</h2>
            </div>
            <nav className={s.nav}>
                <ul className={s.list}>
                    {catigories?.map((link) => (
                        <Link to={`/category/${link}`} 
                        key={link} className={s.item}>{link}</Link>
                    ))}
                </ul>
            </nav>
            <input className={s.input} type="text" placeholder=' Search for products...' />
            <div className={s.log}>
                <img src={log} alt="" />
                <img src={bin} alt="" />
            </div>
        </header>
    )
}
