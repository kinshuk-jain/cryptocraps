import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './CardPanel.component.css';

import { FlagOption } from '../../../CardPanel';
import { Link } from '../../../Link';

// TODO - chhange history.push to correct route
const Header = props => {
  const { className, title, hasPin, link } = props;
  return (
    <div className={classNames(s.titleContainer, className)}>
      <Link className={s.title} to={link}>
        {title}
      </Link>
      {hasPin && (
        <div className={s.flagpin}>
          <FlagOption link={link} title={title} />
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  hasPin: PropTypes.bool,
  link: PropTypes.string,
};

Header.defaultProps = {
  className: '',
  hasPin: false,
  link: '',
};

const Footer = props => {
  const { className, timeToGoLive, valueTraded } = props;
  return (
    <div className={classNames(s.footer, className)}>
      {!timeToGoLive ? (
        <div className={s.time}>
          <i className={classNames('icon-minus', s.blink)} />
          <span className={s.live}>Live Now</span>
        </div>
      ) : (
        <div className={s.time}>
          <i className="icon-remove_sign" />
          <span className={s.live}>In ${timeToGoLive} hours</span>
        </div>
      )}
      <div className={s.value}>Traded ${valueTraded}</div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  timeToGoLive: PropTypes.number.isRequired,
  valueTraded: PropTypes.number,
};

Footer.defaultProps = {
  className: '',
  valueTraded: 0,
};

class CardPanel extends React.Component {
  static Header = Header;
  static Footer = Footer;
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  render() {
    return <div className={s.container}>{this.props.children}</div>;
  }
}

export default withStyles(s)(CardPanel);
