import React from 'react'
import s from './Header.module.scss'
import log from './pic/log.svg'
import bin from './pic/bin.svg'

export const Header = () => {
  return (
    <header className={`${s.header} container`}>
        <div className={s.wrapper}>
        <h2 className={s.title}>SHOP.CO</h2>
        </div>
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>Shop</li>
                <li className={s.item}>On Sale</li>
                <li className={s.item}>New Arrivals</li>
                <li className={s.item}>Brands</li>
            </ul>
        </nav>
        <input className={s.input} type="text" placeholder=' Search for products...'/>
        <div className={s.log}>
          <img src={log} alt="" />
          <img src={bin} alt="" />
        </div>
    </header>
  )
}
