import s from './ProductCard.module.scss'

export const ProductCard = (props) => {
    const { title, price, thumbnail } = props

  return (
    <div className={`${s.card} container`}>
        <div className={s.wrapper}>
            <img className={s.image}
             src={thumbnail} alt="" />
        </div>
        <h3 className={s.title}>{title}</h3>
        <span className={s.price}>${price}</span>
    </div>
  )
}
