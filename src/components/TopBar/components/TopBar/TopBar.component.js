import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TopBar.component.css';

const TopBarComponent = props => {
  const { hideTopBar, closeTopBar, text } = props;
  return !hideTopBar ? (
    <div className={s.container}>
      {text}
      <div className={s.cross} onClick={() => closeTopBar(true)}>
        <i className="icon-x" />
      </div>
    </div>
  ) : null;
};

TopBarComponent.propTypes = {
  hideTopBar: PropTypes.bool.isRequired,
  closeTopBar: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(s)(TopBarComponent);
