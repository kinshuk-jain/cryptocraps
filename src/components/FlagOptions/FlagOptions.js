/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FlagOptions.css';

import { addToPinBar } from '../../actions/pinBarActions';

class FlagOptions extends React.Component {
  static propTypes = {
    addToPinBar: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  state = {
    showHover: false,
  };

  render() {
    const { showHover } = this.state;
    return (
      <div
        onMouseOver={() => {
          clearTimeout(this.timeout);
          this.setState({ showHover: true });
        }}
        onMouseOut={() => {
          this.timeout = setTimeout(() => {
            this.setState({ showHover: false });
          }, 300);
        }}
      >
        <i className="icon-ellipsis_vertical" />
        {showHover ? (
          <ul
            className={s.flagPin}
            onClick={e => {
              const li = e.target && e.target.closest('li');
              if (li) {
                switch (li.id) {
                  case 'flag':
                    return;
                  case 'pin':
                    this.props.addToPinBar({
                      postId: this.props.postId,
                      title: this.props.title,
                    });
                    return;
                  default:
                    console.error('Invalid Id'); // eslint-disable-line
                }
              }
            }}
          >
            <li id="flag">
              <i className="icon-flag" />Flag
            </li>
            <li id="pin">
              <i className="icon-pin" /> Pin
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default withStyles(s)(
  connect(null, dispatch => ({
    addToPinBar: payload => dispatch(addToPinBar(payload)),
  }))(FlagOptions),
);
