import React, {Component} from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import ProductDescription from './ProductDescription';
import itemData from '../data/item-data'

class Gallery extends Component {

  constructor() {
        super();
        this.state = {
          currentIndex: 0,
        };
      }

      slideTo = (i) => this.setState({ currentIndex: i });
      onSlideChanged = (e) => this.setState({ currentIndex: e.item });
      slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });
      slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

      renderMain = () =>
        <div>
          {itemData.CatalogEntryView.map((postDetail, index) => {
            let itemImage = postDetail.Images
            return (
              <div key={index}>
                {itemImage.map((postItemImage, index) => {
                  let itemAlternativeImages = postItemImage.PrimaryImage
                  return (
                    <div key={index}>
                      {itemAlternativeImages.map((postImage, index) => {
                          let imagePlace = postImage.image
                          return (
                            <div className="p-1" key={index}><img src={imagePlace} alt="Product Title" className="pull-center" /></div>
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
          </div>;

          renderThumbs = () =>
          <div>
              {itemData.CatalogEntryView.map((postDetail, index) => {
                let itemImage = postDetail.Images
                return (
                  <div key={index}>
                    {itemImage.map((postItemImage, index) => {
                      let itemAlternativeImages = postItemImage.AlternateImages
                      return (
                        <div key={index}>
                          {itemAlternativeImages.map((postImage, index) => {
                              let imagePlace = postImage.image
                              return (
                                <span className="p-1" key={index} onClick={() => this.slideTo(index)}><img src={imagePlace} alt="Product Thumbnails" className="thumb-image img-fluid" /></span>
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
            </div>;

  render() {

    return (
      <div>
        <div className="mb-3 text-center">
          { this.renderMain() }
          <div className="gallery-row pull-center mt-3">
            <button onClick={() => this.slidePrev()} className="no-button"><i className="fas fa-backward"></i> <span className="sr-only">Previous Image</span></button>
              <div className="thumb-box">{ this.renderThumbs() }</div>
              <button onClick={() => this.slideNext()} className="no-button"><i className="fas fa-forward"></i> <span className="sr-only">Next Image</span></button>
          </div>
        </div>
        <ProductDescription />
      </div>
    );
  }
}
export default Gallery
