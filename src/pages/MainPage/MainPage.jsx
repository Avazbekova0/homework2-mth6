import { Banner } from '../../widgets/Banner'
import Reviews from '../Reviews/Reviews'
import { useMainPage } from './MainPage.api'
import { Link } from 'react-router-dom'
import s from './MainPage.module.scss'
import calvin from './pic/calvin.svg'
import gucci from './pic/gucci.svg'
import prada from './pic/prada.svg'
import versace from './pic/versace.svg'
import zara from './pic/zara.svg'

export const MainPage = () => {
  const { data: products, error, isError, isPending } = useMainPage()

  if (isPending) {
    return <div>Загрузка...</div>
  }

  if (isError) {
    return <div>Ошибка при получении данных: {error.message}</div>
  }

    const newProducts = products?.slice(0, 8)

  return (
    <main>
      <Banner />

      <section className={s.brands}>
        <img src={versace} alt="versace" />
        <img src={zara} alt="zara" />
        <img src={gucci} alt="gucci" />
        <img src={prada} alt="prada" />
        <img src={calvin} alt="calvin" />
      </section>

<section className="container">

  <h1 className={s.sell}>NEW ARRIVALS</h1>

  <div className={s.addverts}>
    {newProducts?.slice(0, 4).map((product) => (
      <Link
        to={`/products/${product.id}`}
        className={s.addvert_link}
        key={product.id}
      >
        <div className={s.addvert_card}>
          <img className={s.addvert} src={product.thumbnail} alt={product.title} />

          <h3 className={s.name}>{product.title.slice(0, 25)}</h3>

          <span className={s.rating_3}>
            {"★".repeat(Math.round(product.rating))}
          </span>

          <span className={s.rating_4}>
            {product.rating.rate}/5
          </span>

          <div className={s.prices}>
          <span className={s.price}>${product.price}</span>

          {product.id % 2 === 0 && (
            <>
              <span className={s.old_price}>
                ${(product.price * 1.2).toFixed(2)}
              </span>

              <span className={s.discount}>-20%</span>
            </>
          )}
        </div>
      </div>
      </Link>
    ))}
  </div>

  <button className={s.btn}>View All</button>

</section>

<hr />

<section className="container">

  <h1 className={s.sell}>TOP SELLING</h1>

  <div className={s.addverts}>
    {newProducts?.slice(4, 8).map((product) => (
      <Link
        to={`/products/${product.id}`}
        className={s.addvert_link}
        key={product.id}>

        <div className={s.addvert_card}>
          <img className={s.addvert} src={product.thumbnail} alt={product.title} />

          <h3 className={s.name}>{product.title.slice(0, 25)}</h3>

          <span className={s.rating_3}>
            {"★".repeat(product.rating)}
          </span>

          <span className={s.rating_4}>
            {product.rating.rate}/5
          </span>

          <div className={s.prices}>
          <span className={s.price}>${product.price}</span>

          {product.id % 3 === 1 && (
            <>
              <span className={s.old_price}>
                ${(product.price)}
              </span>

              <span className={s.discount}>-20%</span>
            </>
          )}
        </div>
        </div>
      </Link>
    ))}
  </div>

  <button className={s.btn}>View All</button>

</section>

      <section className={`${s.tablet} container`}>
        <h1>BROWSE BY DRESS STYLE</h1>

        <div className={s.tablet_up}>
          <div className={s.casual}>
            <h3>Casual</h3>
          </div>

          <div className={s.formal}>
            <h3>Formal</h3>
          </div>
        </div>

        <div className={s.tablet_down}>
          <div className={s.party}>
            <h3>Party</h3>
          </div>

          <div className={s.gym}>
            <h3>Gym</h3>
          </div>
        </div>
      </section>

          <h1 className='container'>OUR HAPPY CUSTOMERS</h1>
      <Reviews />
    </main>
  )
}
