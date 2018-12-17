import React, {Component} from 'react';

const STATUS = {
  HOVERED: 'hovered myRetail-logo-text md-gray-text font-four',
  NORMAL: 'normal myRetail-logo-text md-gray-text font-four',
};

export default class Logo extends Component {


  constructor() {
      super();

      this._onMouseEnter = this._onMouseEnter.bind(this);
      this._onMouseLeave = this._onMouseLeave.bind(this);

      this.state = {
        class: STATUS.NORMAL,
      };
    }

    _onMouseEnter() {
      this.setState({class: STATUS.HOVERED});
    }

    _onMouseLeave() {
      this.setState({class: STATUS.NORMAL});
    }

    render() {
      return (
        <a
          className={this.state.class}
          href={this.props.page || '#'}
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
        >
          myRetail
        </a>
      );
    }
  }
