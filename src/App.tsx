import { useState } from 'react'
import './App.css'
import logo from './images/logo.png'

function App() {

  return (
    <div className="App">
      <main className='Box'>
        <div className="header-cupom">
          <div className="Logo">
            <div className='LogoFruits'><img src={logo} alt="logo"/></div>
            <div className="text-logo"><h1>Love Fruits</h1></div>
          </div>

          <div className="information">
            <h1>congratulations on the Love fruits coupon</h1>
            <p>we at Love Fruits like to bring the love of flavor to your home and with values that fit in your pocket</p>
            <a href="#">Come here!</a>
          </div>
        </div>
        <div className="discount">
          <div className="discount-coupon">
            <h1>50%</h1>
            <p>purchases up to £200</p>
            <span>code: very50</span>
          </div>
          <div className="discount-coupon">
            <h1>25%</h1>
            <p>purchases up to £100</p>
            <span>code: very25</span>
          </div>
          <div className="discount-coupon">
            <h1>15%</h1>
            <p>purchases up to £50</p>
            <span>code: very15</span>
          </div>
          <div className="discount-coupon">
            <h1>5%</h1>
            <p>purchases up to £30</p>
            <span>code: very5</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
