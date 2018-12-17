import React, {Component} from 'react';
import itemData from '../data/item-data'

class AddToCart extends Component {

  render() {
    let itemInfo = itemData.CatalogEntryView

    return (
      <div>
        {itemInfo.map((postDetail, index) => {
          const letsPickUp = (postDetail.purchasingChannelCode === '0' || postDetail.purchasingChannelCode === '2');
          const letsCartThis = (postDetail.purchasingChannelCode === '0' || postDetail.purchasingChannelCode === '1');
          return (
            <div className="row mb-3">
              <div className="col-xs-12 col-lg-6">
              {letsPickUp &&
                <button type="button" className="btn btn-secondary btn-bg-sm">
                  PICK UP IN STORE
                </button>}
              </div>
              <div className="col-xs-12 col-lg-6">
              {letsCartThis &&
                <button type="button" className="btn btn-success btn-bg-sm">
                    ADD TO CART <i className="fas fa-shopping-cart md-gray-text m-1"></i>
                </button>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AddToCart;
