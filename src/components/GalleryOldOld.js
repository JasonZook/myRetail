import React, {Component} from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
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

      renderThumbs = () =>
      <div>
          {itemData.CatalogEntryView.map((postDetail, index) => {
            let itemImage = postDetail.Images
            return (
              <div>
                {itemImage.map((postItemImage, index) => {
                  let itemAlternativeImages = postItemImage.AlternateImages
                  return (
                    <div>
                      {itemAlternativeImages.map((postImage, index) => {
                          let imagePlace = postImage.image
                          return (
                            <span className="p-1" key={index} onClick={() => this.slideTo(index)}><img src={imagePlace} className="thumb-image" /></span>
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

      renderGallery() {
        const { currentIndex} = this.state;

        return (

            <AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            slideToIndex={currentIndex}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}>

            {itemData.CatalogEntryView.map((postDetail, i) => {
              let itemImage = postDetail.Images
              return (
                <div key={i}> {itemImage.map((postItemImage, index) => {
                    let itemAlternativeImages = postItemImage.AlternateImages
                    return (
                      <h2>
                        {itemAlternativeImages.map((postImage, i) => {
                            let imagePlace = postImage.image
                            return (
                              <img src={imagePlace} />
                            )
                          })
                        }
                      </h2>
                      )
                    })
                  }
                </div>
              )
            })}
            </AliceCarousel>
          );
        }

  render() {

    return (
      <div>
        <div className="row mb-3 text-center">
          { this.renderGallery() }
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
