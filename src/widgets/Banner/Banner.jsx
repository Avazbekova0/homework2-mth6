import React from 'react'
import s from './Banner.module.scss'
import decor from './pic/decor.svg'
import decorbig from './pic/decorbig.svg'

const Banner = () => {
  return (
    <section className={s.banner}>
      <div className={`${s.text} container`}>
        <img className={s.decor} src={decor} alt="" />
        <img className={s.decorbig} src={decorbig} alt="" />
        <h1 className={s.title}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className={s.des}>Browse through our diverse range of meticulously 
          crafted garments, designed to bring out your individuality 
          and cater to your sense of style.</p>
          <button className={s.btn}>Shop Now</button>
          <div className={s.count}>
            <div>
            <h1 className={s.col}>200+</h1>
            <p className={s.col_2}>International Brands</p>
            </div>
            <div>
              <h1 className={s.col}>2,000+</h1>
              <p className={s.col_2}>High-Quality Products</p>
            </div>
            <div>
              <h1 className={s.col}>30,000+</h1>
              <p className={s.col_2}>Happy Customers</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Banner