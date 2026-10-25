import React from 'react'
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
            <input
              className={s.input}
              type="text"
              placeholder="Enter your email address"
            />
            <button className={s.btn}>
              Subscribe to Newsletter
            </button>
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
                <img className={s.img} src={twitter} alt="" />
                <img className={s.img} src={facebook} alt="" />
                <img className={s.img} src={instagram} alt="" />
                <img className={s.img} src={github} alt="" />
              </div>
            </div>

            <div className={s.items}>
              <h6>Company</h6>
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>

            <div className={s.items}>
              <h6>Help</h6>
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>

            <div className={s.items}>
              <h6>FAQ</h6>
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payments</p>
            </div>

            <div className={s.items}>
              <h6>Resources</h6>
              <p>Free eBooks</p>
              <p>Development Tutorial</p>
              <p>How to - Blog</p>
              <p>Youtube Playlist</p>
            </div>
          </div>

          <hr />

          <div className={s.down_footer}>
            <p>Shop.co © 2000-2023, All Rights Reserved</p>

            <div className={s.brands}>
              <img className={s.brand} src={visa} alt="" />
              <img className={s.brand} src={mastercard} alt="" />
              <img className={s.brand} src={paypal} alt="" />
              <img className={s.brand} src={apppay} alt="" />
              <img className={s.brand} src={gpay} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
