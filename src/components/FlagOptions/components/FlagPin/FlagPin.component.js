import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FlagPin.component.css';

import { FLAG_OPTIONS } from '../../FlagOptions.constants';
import { withHover } from '../../../common/';

const FlagPin = props => {
  const { onOptionClick, showHover } = props;
  return (
    <div onClick={onOptionClick}>
      <i className="icon-ellipsis_vertical" />
      {showHover ? (
        <ul className={s.flagPin}>
          <li id={FLAG_OPTIONS.FLAG.ID}>
            <i className="icon-flag" /> {FLAG_OPTIONS.FLAG.NAME}
          </li>
          <li id={FLAG_OPTIONS.PIN.ID}>
            <i className="icon-pin" /> {FLAG_OPTIONS.PIN.NAME}
          </li>
        </ul>
      ) : null}
    </div>
  );
};

FlagPin.propTypes = {
  onOptionClick: PropTypes.func.isRequired,
  showHover: PropTypes.bool.isRequired,
};

// HoverContainer is a HOC wrapping components to provide hover functionality
const FlagOptions = withHover(FlagPin);

FlagOptions.propTypes = {
  onOptionClick: PropTypes.func.isRequired,
};

export default withStyles(s)(FlagOptions);
