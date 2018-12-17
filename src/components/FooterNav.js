import React, {Component} from 'react';

export default class FooterNav extends Component {

  render() {

    return (
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2017-2018 myRetail</p>
        <ul className="list-inline myretail-dk-green-text">
          <li className="list-inline-item mx-4"><a href="#">Contact Us</a></li>
          <li className="list-inline-item mx-4"><a href="#">Shipping</a></li>
          <li className="list-inline-item mx-4"><a href="#">Returns</a></li>
          <li className="list-inline-item mx-4"><a href="#">Gift Certificates</a></li>
          <li className="list-inline-item mx-4"><a href="#">About Us</a></li>
          <li className="list-inline-item mx-4"><a href="#">Store Locations</a></li>
        </ul>
      </footer>
    );
  }
}
