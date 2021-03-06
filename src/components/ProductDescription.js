import React, {Component} from 'react';
import itemData from '../data/item-data'

export default class ProductDescription extends Component {

  render() {
    let itemInfo = itemData.CatalogEntryView
    return (
      <div className="row">
        <div className="col font-point-nine">
          {itemInfo.map((postDetail, index) => {
            return (<p key={index}>
                {postDetail.shortDescription}
              </p>);
          })}
        </div>
      </div>
    );
  }
}
