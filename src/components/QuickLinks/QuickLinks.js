import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './QuickLinks.css';

import { showNavBar } from '../../actions/categoryNavActions';

class QuickLinks extends React.Component {
  static propTypes = {
    showSidebar: PropTypes.bool,
    showNavBar: PropTypes.func.isRequired,
  };

  static defaultProps = {
    showSidebar: true,
  };

  render() {
    return this.props.showSidebar ? (
      <div className={s.container}>
        <div className={s.title}>Quick Links</div>
        <div className={s.caret} onClick={() => this.props.showNavBar(false)}>
          <i className="icon-chevron-left" />
        </div>
        <ul className={s.catList}>
          <li>
            <i className="icon-BTC-alt" /> Football
          </li>
          <li>
            <i className="icon-BCH-alt" /> Boxing
          </li>
          <li>
            <i className="icon-GLD" /> Hockey
          </li>
          <li>
            <i className="icon-ETC" /> Tennis
          </li>
          <li>
            <i className="icon-DASH-alt" /> Darts
          </li>
          <li>
            <i className="icon-XRP-alt" /> Rugby
          </li>
          <li>
            <i className="icon-OMG" /> Basketball
          </li>
        </ul>
      </div>
    ) : (
      <div className={s.container}>
        <div className={s.caret} onClick={() => this.props.showNavBar(true)}>
          <i className="icon-chevron-right" />
        </div>
        <ul className={s.smallList}>
          <li>
            <i className="icon-BTC-alt" />{' '}
          </li>
          <li>
            <i className="icon-BCH-alt" />{' '}
          </li>
          <li>
            <i className="icon-GLD" />{' '}
          </li>
          <li>
            <i className="icon-ETC" />{' '}
          </li>
          <li>
            <i className="icon-DASH-alt" />{' '}
          </li>
          <li>
            <i className="icon-XRP-alt" />{' '}
          </li>
          <li>
            <i className="icon-OMG" />{' '}
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(
  connect(
    ({ showSidebar }) => ({
      showSidebar,
    }),
    dispatch => ({
      showNavBar: (payload = true) => dispatch(showNavBar(payload)),
    }),
  )(QuickLinks),
);
