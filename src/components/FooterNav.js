import React, {Component} from 'react';

export default class FooterNav extends Component {

  render() {

    return (
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2017-2018 myRetail</p>
        <ul className="list-inline myretail-dk-green-text">
          <li className="list-inline-item mr-md-4 mr-sm-2"><a href="http://www.fakeurl.zz/contact-us">Contact Us</a></li>
          <li className="list-inline-item mx-md-4 mx-sm-2"><a href="http://www.fakeurl.zz/shipping">Shipping</a></li>
          <li className="list-inline-item mx-md-4 mx-sm-2"><a href="http://www.fakeurl.zz/returns">Returns</a></li>
          <li className="list-inline-item mx-md-4 mx-sm-2"><a href="http://www.fakeurl.zz/gift-certificates">Gift Certificates</a></li>
          <li className="list-inline-item mx-md-4 mx-sm-2"><a href="http://www.fakeurl.zz/about-us">About Us</a></li>
          <li className="list-inline-item ml-md-4 ml-sm-2"><a href="http://www.fakeurl.zz/store-locations">Store Locations</a></li>
        </ul>
      </footer>
    );
  }
}
