import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Modal.container.css';
import { disableBodyScrolling } from '../../../../core/utils';

class Modal extends Component {
  componentDidMount() {
    const { avoidFixed } = this.props;
    disableBodyScrolling(true, avoidFixed);
  }

  componentWillUnmount() {
    const { avoidFixed } = this.props;
    disableBodyScrolling(false, avoidFixed);
  }

  render() {
    const {
      children,
      overlay,
      showCross,
      isFull = false,
      height,
      classes = '',
      closeFn,
      top,
      width,
      overflow,
    } = this.props;

    const linkStyle = {
      height: `${height}%`,
      top: `${top || (100 - height) / 2 - 1}%`,
      width: `${width}%`,
      left: `${(100 - width) / 2 - 1}%`,
      overflow,
    };

    return (
      <div className={classNames(s.popupInfo, classes)}>
        {overlay ? <div className={s.backInfo} onClick={closeFn} /> : null}
        <div
          className={classNames({
            [s.popupContainerFull]: isFull,
            [s.popupContainer]: !isFull,
          })}
          style={isFull ? {} : linkStyle}
        >
          {showCross ? (
            <div className={s.crossInfo} onClick={closeFn}>
              <i className="icon-x" />
            </div>
          ) : null}
          <div className={s.contentContainer}>{children}</div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  overlay: PropTypes.bool,
  showCross: PropTypes.bool,
  closeFn: PropTypes.func,
  height: PropTypes.number,
  overflow: PropTypes.string,
  top: PropTypes.number,
  isFull: PropTypes.bool,
  avoidFixed: PropTypes.bool,
  width: PropTypes.number,
};

Modal.defaultProps = {
  avoidFixed: false,
  classes: '',
  overlay: true,
  showCross: true,
  closeFn: () => {},
  overflow: 'auto',
  top: 20,
  isFull: false,
  height: 60,
  width: 70,
};

export default withStyles(s)(Modal);
