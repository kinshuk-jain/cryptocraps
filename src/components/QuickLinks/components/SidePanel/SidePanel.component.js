import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SidePanel.component.css';

const SidePanel = props => {
  const {
    title,
    handleCaretClick,
    showSidebar,
    panelItems,
    className,
    onClick,
  } = props;
  return (
    <div className={classNames(s.container, className)}>
      {showSidebar && <div className={s.title}>{title}</div>}
      <div className={s.caret} onClick={handleCaretClick}>
        <i
          className={classNames({
            'icon-chevron-left': showSidebar,
            'icon-chevron-right': !showSidebar,
          })}
        />
      </div>
      <ul
        className={classNames({
          [s.catList]: showSidebar,
          [s.smallList]: !showSidebar,
        })}
        onClick={onClick}
      >
        {panelItems.map((item, i) => (
          <li key={i}>
            <span className={s.panelItem}>
              <i className={item.icon} /> {showSidebar ? item.name : ' '}
            </span>
            {showSidebar && (
              <span className={s.activeBets}>{item.activeBets}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

SidePanel.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  showSidebar: PropTypes.bool.isRequired,
  handleCaretClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  panelItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

SidePanel.defaultProps = {
  className: '',
  onClick: () => ({}),
};

export default withStyles(s)(SidePanel);
