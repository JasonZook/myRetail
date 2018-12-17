import React, { PropTypes, Component } from 'react';

const propTypes = {};

const defaultProps = {};

class Social extends Component {
  constructor(props) {
  super(props);
  }

  render() {

    return (
      <div className="text-center mb-5">
        <a href="http://www.pintrest.com"><i className="fab fa-pinterest mx-3 font-two md-gray-text"> <span className="sr-only">Pinterest</span></i></a>
        <a href="http://www.facebook.com"><i className="fab fa-facebook mx-3 font-two md-gray-text"> <span className="sr-only">Facebook</span></i></a>
        <a href="http://www.instagram.com"><i className="fab fa-instagram mx-3 font-two md-gray-text"> <span className="sr-only">Instagram</span></i></a>
      </div>
    );
  }
}

Social.propTypes = propTypes;
Social.defaultProps = defaultProps;

export default Social;
