import React, {Component} from 'react';
import Logo from './Logo'
export default class Header extends Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg myretail-green-bg shadow-sm border-bottom-gray fixed-top">
        <div className="container line-one">

          <Logo page={"http://www.fakeurl.zz"} />

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsHeader" aria-controls="navbarsHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ml-5" id="navbarsHeader">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item mx-4">
                <a className="md-gray-text text-bold font-point-nine" href="http://www.fakeurl.zz/home-goods">Home Goods</a>
              </li>
              <li className="nav-item mx-4">
                <a className="md-gray-text text-bold font-point-nine" href="http://www.fakeurl.zz/apparel">Apparel</a>
              </li>
              <li className="nav-item mx-4">
                <a className="md-gray-text text-bold font-point-nine" href="http://www.fakeurl.zz/kids">Kids</a>
              </li>
              <li className="nav-item mx-4">
                <a className="md-gray-text text-bold font-point-nine" href="http://www.fakeurl.zz/organics">Organics</a>
              </li>
            </ul>
            <form className="form-inline my-2">
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </form>
            <i className="fas fa-shopping-cart font-two md-gray-text m-2"></i> (0)
          </div>
        </div>
      </nav>
    );
  }
}
