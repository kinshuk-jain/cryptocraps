import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MenuBar.component.css';
import { Link } from '../../../Link';

class MenuBarComponent extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  };

  render() {
    const { links = [] } = this.props;
    return (
      <div className={s.root} role="navigation">
        <i className="icon-bars" />
        <ul className={s.menu}>
          <li className={s.categoryTitle}>
            <i className="icon-bars" />
            <span> Categories</span>
          </li>
          {links.map((link, i) => (
            <li key={i}>
              <Link className={s.menuItem} to={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(MenuBarComponent);
