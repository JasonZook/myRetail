import React, {Component} from 'react'
import itemData from '../data/item-data'

class ItemPriceInfo extends Component {

  render() {
    let itemInfo = itemData.CatalogEntryView
    return (
      <div>
        <div className="my-1">
        {itemInfo.map((postDetail, index) => {
          let itemImageOffers = postDetail.Offers
          return (
            <div> {
              itemImageOffers.map((postItemOfferPrice, index) => {
                let itemFormatedPrice = postItemOfferPrice.OfferPrice
                return (
                  <div>
                    {
                      itemFormatedPrice.map((postItemFormatedPrice, index) => {
                        let itemValue = postItemFormatedPrice.formattedPriceValue
                        return (
                          <span className="text-success font-two text-bold">{itemValue}</span>
                        )
                      })
                    }
                  </div>
                  )
                })
              }
            </div>
          )
        })}
        </div>
        <hr className="mb-3" />
        <div className="mb-3">
          <div className="col text-danger text-small my-1"><i className="fas fa-tag"></i> Build a 6-pack and save</div>
          <div className="col text-danger text-small my-1"><i className="fas fa-tag"></i> Shipping always free</div>
        </div>
        <div className="row mb-3">
          <div className="mx-3">
            <label className="text-bold font-one-five">Quantity</label>
          </div>
          <div className="w-25">
            <input type="number" className="form-control" aria-label="quantity" id="quantity" aria-describedby="basic-addon1" />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPriceInfo;
