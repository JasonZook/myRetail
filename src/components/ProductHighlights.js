import React, {Component} from 'react';

export default class ProductHighlights extends Component {

  render() {

    return (
      <ul className="list-group mt-3 font-point-nine">
        <li className="list-group-item lh-condensed">
          <h3 className="my-0">Product Highlights</h3>
        </li>
        <li className="list-group-item py-2 lh-condensed">
          Organic
        </li>
        <li className="list-group-item py-2 lh-condensed">
          Locally Sourced
        </li>
        <li className="list-group-item py-2 lh-condensed">
          Taste Good
        </li>
        <li className="list-group-item py-2 lh-condensed">
          It is acutally a fruit
        </li>
        <li className="list-group-item py-2 lh-condensed">
          It is green
        </li>
      </ul>
    );
  }
}
