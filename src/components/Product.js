import React, {Component} from 'react';
import itemData from '../data/item-data'

export default class Product extends Component {

  render() {
    let itemInfo = itemData.CatalogEntryView
    return (
      <div className="mb-5">
        {itemInfo.map((postDetail, index) => {
          return (<div>
              <h1 className="m-0">{postDetail.title}</h1>
              <div>{postDetail.manufacturer}</div>
            </div>);
        })}
      </div>
    );
  }
}
