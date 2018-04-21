import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FlagPin.component.css';

const FlagOptions = props => {
  const { onOptionClick } = props;
  return (
    <div className={s.flagPin} onClick={onOptionClick}>
      <i title="pin to pinbar" className="icon-pin" />
    </div>
  );
};

FlagOptions.propTypes = {
  onOptionClick: PropTypes.func.isRequired,
};

FlagOptions.propTypes = {
  onOptionClick: PropTypes.func.isRequired,
};

export default withStyles(s)(FlagOptions);
