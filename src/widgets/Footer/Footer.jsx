import s from './Footer.module.scss'
import twitter from './pic/twitter.svg'
import facebook from './pic/facebook.svg'
import instagram from './pic/instagram.svg'
import github from './pic/github.svg'
import visa from './pic/visa.svg'
import mastercard from './pic/mastercard.svg'
import paypal from './pic/paypal.svg'
import apppay from './pic/apppay.svg'
import gpay from './pic/gpay.svg'

const Footer = () => {
  return (
    <>
      <div className="container">
        <section className={s.login}>
          <h1 className={s.text}>
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className={s.sub}>
            <input className={s.input} type="text" placeholder="Enter your email address" />
            <button className={s.btn}>Subscribe to Newsletter</button>
          </div>
        </section>
      </div>

      <footer className={s.footer}>
        <div className={`${s.container} container`}>
          <div className={s.item}>
            <div>
              <h1 className={s.title}>SHOP.CO</h1>
              <p className={s.des}>
                We have clothes that suits
                your style and which you’re
                proud to wear. From women to men.
              </p>
              <div className={s.imgs}>
                <a href="#"><img className={s.img} src={twitter} alt="Twitter" /></a>
                <a href="#"><img className={s.img} src={facebook} alt="Facebook" /></a>
                <a href="#"><img className={s.img} src={instagram} alt="Instagram" /></a>
                <a href="#"><img className={s.img} src={github} alt="GitHub" /></a>
              </div>
            </div>

            <div className={s.items}>
              <h6>Company</h6>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Works</a>
              <a href="#">Career</a>
            </div>

            <div className={s.items}>
              <h6>Help</h6>
              <a href="#">Customer Support</a>
              <a href="#">Delivery Details</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>

            <div className={s.items}>
              <h6>FAQ</h6>
              <a href="#">Account</a>
              <a href="#">Manage Deliveries</a>
              <a href="#">Orders</a>
              <a href="#">Payments</a>
            </div>

            <div className={s.items}>
              <h6>Resources</h6>
              <a href="#">Free eBooks</a>
              <a href="#">Development Tutorial</a>
              <a href="#">How to - Blog</a>
              <a href="#">Youtube Playlist</a>
            </div>
          </div>

          <hr />

          <div className={s.down_footer}>
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className={s.brands}>
              <img className={s.brand} src={visa} alt="Visa" />
              <img className={s.brand} src={mastercard} alt="Mastercard" />
              <img className={s.brand} src={paypal} alt="PayPal" />
              <img className={s.brand} src={apppay} alt="Apple Pay" />
              <img className={s.brand} src={gpay} alt="Google Pay" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
