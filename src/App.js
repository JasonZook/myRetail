import React, { Component } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import CustomerReviews from './components/CustomerReviews'
import ProductHighlights from './components/ProductHighlights'
import FooterNav from './components/FooterNav'
import Gallery from './components/Gallery'
import ItemPriceInfo from './components/ItemPriceInfo'
import AddToCart from './components/AddToCart'
import Social from './components/Social'
import Product from './components/Product'

class App extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <div className="container fixed-top-fix">
          <div className="row">
            <div className="col-md-8 order-md-1 px-2">
              <Product />
              <Gallery />
            </div>
            <div className="col-md-4 order-md-1 mb-4 px-2">
              <ItemPriceInfo/>
              <AddToCart />
              <Social />
              <ProductHighlights />
            </div>
            <div className="col-md-8 order-md-2 px-2">
              <hr className="mb-4" />
              <CustomerReviews />
            </div>
          </div>
          <FooterNav />
        </div>
      </div>
    );
  }
}

export default App
