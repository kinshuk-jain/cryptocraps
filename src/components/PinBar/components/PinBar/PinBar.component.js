import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './PinBar.component.css';

const PinBarComponent = props => {
  const { eventList, closeFn, expanded, expandPinBar } = props;
  const listEmpty = _.isEmpty(eventList);
  return (
    <div className={s.pinBar}>
      {!expanded && !listEmpty && <div className={s.slider}>Pin Bar</div>}
      {expanded && (
        <div className={s.subBar}>
          {Object.keys(eventList).map(key => {
            const title = eventList[key];
            return (
              <div className={s.pinBarItem} key={key}>
                <div className={s.heading}>{title}</div>
                <i className="icon-minus" />
                <i
                  className="icon-x"
                  onClick={() => {
                    closeFn({ link: key, title });
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
      {!listEmpty && (
        <div className={s.cursor} onClick={expandPinBar}>
          <i
            className={classNames({
              'icon-chevron-left': expanded,
              'icon-chevron-right': !expanded,
            })}
          />
        </div>
      )}
    </div>
  );
};

PinBarComponent.propTypes = {
  eventList: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired,
  expandPinBar: PropTypes.func.isRequired,
  closeFn: PropTypes.func.isRequired,
};

export default withStyles(s)(PinBarComponent);
