import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ActionHelper.component.css';
import { withHover } from '../../../../common';

const Help = props => {
  const { showHover, data, name } = props;
  return (
    <div className={s.action}>
      <span className={s.actionName}>{name}</span>
      <i className="icon-chevron-down caret" />
      <span className={s.spacer} />
      {showHover && (
        <div className={s.dropDown}>
          {data.map((item, i) => (
            <div key={i} className={s.dataItem}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Help.propTypes = {
  showHover: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

const ActionHelper = withHover(Help);

export default withStyles(s)(ActionHelper);
