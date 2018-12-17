import React, {Component} from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import ProductDescription from './ProductDescription';

export default class Gallery extends Component {

  constructor() {
        super();
        this.state = {
          currentIndex: 0,
          items: [
              <img src="../../images/avocado_lg1.jpg"/>,
              <img src="../../images/avocado_lg2.jpg"/>,
              <img src="../../images/avocado_lg3.jpg"/>,
              <img src="../../images/avocado_lg4.jpg"/>,
              <img src="../../images/avocado_lg5.jpg"/>]
        };
      }

      slideTo = (i) => this.setState({ currentIndex: i });
      onSlideChanged = (e) => this.setState({ currentIndex: e.item });
      slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });
      slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

      renderThumbs = () =>
        <span>{this.state.items.map((item, i) =>
          <span className="p-2" key={i} onClick={() => this.slideTo(i)}>{item}</span>)}
        </span>;

      renderGallery() {
        const { currentIndex, items } = this.state;

        return (<AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        >
          { items.map((item, i) => <div key={i} className="yours-custom-class"><h2>{ item }</h2></div>) }
        </AliceCarousel>);
      }

  static propTypes = {

  }

  render() {
    const {} = this.props;

    return (
      <div>
        <div className="row mb-5 text-center">
          { this.renderGallery() }
          <div className="gallery-row pull-center mt-3">
            <button onClick={() => this.slidePrev()} className="no-button"><i className="fas fa-backward"></i> <span className="sr-only">Previous Image</span></button>
            { this.renderThumbs() }
            <button onClick={() => this.slideNext()} className="no-button"><i className="fas fa-forward"></i> <span className="sr-only">Next Image</span></button>
          </div>
        </div>
        <ProductDescription />
      </div>
    );
  }
}
