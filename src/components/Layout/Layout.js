/* eslint-disable no-unused-expressions */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import { Header } from '../Header';
import TopBar from '../TopBar';
import { addRemoveScrollEventListener, scrollToTop } from '../../core/utils';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    hideTopBar: PropTypes.bool,
  };

  static defaultProps = {
    hideTopBar: false,
  };

  state = {
    showScrollToTop: false,
  };

  componentDidMount() {
    addRemoveScrollEventListener(() => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 200) {
        !this.state.showScrollToTop && this.setState({ showScrollToTop: true });
        return;
      }
      this.state.showScrollToTop && this.setState({ showScrollToTop: false });
    });
  }

  render() {
    const { hideTopBar } = this.props;
    return (
      <div className={s.pageContainer}>
        <div className={s.topBarContainer}>
          <TopBar />
          <Header />
        </div>
        <div className={cx(s.child, { [s.addTopBarHeight]: !hideTopBar })}>
          {this.props.children}
        </div>
        {this.state.showScrollToTop && (
          <div
            className={s.scrollToTop}
            onClick={() => {
              scrollToTop(1500);
            }}
          >
            <i className="icon-chevron-up" />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(
  connect(
    ({ hideTopBar }) => ({
      hideTopBar,
    }),
    null,
  )(Layout),
);
