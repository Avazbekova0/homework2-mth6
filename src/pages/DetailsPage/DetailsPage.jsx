import Reviews from "../Reviews/Reviews"
import s from "./DetailsPage.module.scss"
import { Link, useParams } from "react-router-dom"
import { useMainPage, useMainpageId } from "../MainPage/MainPage.api"

export const DetailsPage = () => {
  const { id } = useParams()
  const { data: product, error, isError, isPending } = useMainpageId(id)
  const { data: products } = useMainPage()

  if (isPending) {
    return <div>Загрузка...</div>
  }
  if (isError) {
    return <div>Ошибка при получении данных: {error.message}</div>
  }

  const newProducts = products?.filter(item => item.id !== Number(id)).slice(0, 4)

  return (
    <section>
      <div className="container">
        <Link to="/" className={s.back_link}>← Назад</Link>

        <div className={s.details}>
          <div className={s.product_image}>
            <img src={product.thumbnail} alt={product.title} />
          </div>

          <div className={s.info}>
            <h1>{product.title}</h1>

            <div className={s.rating}>
              <span className={s.stars}>
                {"★".repeat(Math.round(product.rating))}
              </span>
              <span className={s.rating}>{product.rating}/5</span>
            </div>

            <div className={s.price_box}>
              <span className={s.price}>${product.price}</span>
              <span className={s.old_price}>${product.price}</span>
              <span className={s.discount}>
                Скидка {Math.round(product.discountPercentage)}%
              </span>
              <p>{product.description}</p>
              <hr className={s.line} />
              <p>Select Colors</p>
              <span className={s.brown}>✓</span>
              <span className={s.green}></span>
              <span className={s.blue}></span>
              <hr className={s.line} />
              <p>Choose Size</p>
              <button className={s.small}>Small</button>
              <button className={s.medium}>Medium</button>
              <button className={s.large}>Large</button>
              <button className={s.xlarge}>X-Large</button>
              <hr className={s.line} />
              <button className={s.quantity}>- 1 +</button>
              <button className={s.add}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <span className={s.reviews_all}>All Reviews</span>
        <span className={s.reviews_count}>(451)</span>
      </div>

      <Reviews showAll={true} />
      <button className={s.btn}>Load More Reviews</button>

      <h1 className={s.title}>You might also like</h1>

      <div className={`${s.list} container`}>
        {newProducts?.map(product => (
          <Link to={`/products/${product.id}`} className={s.link} key={product.id}>
            <div className={s.card}>
              <img className={s.img} src={product.thumbnail} alt={product.title} />

              <h3 className={s.name}>{product.title.slice(0, 25)}</h3>

              <span className={s.stars}>
                {"★".repeat(Math.round(product.rating))}
              </span>

              <span className={s.rating}>{product.rating}/5</span>

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
    </section>
  )
}