import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

import { CardPanel } from '../../components/CardPanel';
import { PopularEvents } from '../../components/PopularEvents';
import { QuickLinks } from '../../components/QuickLinks';
import SignUp from '../../components/SignUp';
import PinBar from '../../components/PinBar';
import { Footer } from '../../components/Footer';

class Home extends React.Component {
  static propTypes = {
    showSidebar: PropTypes.bool,
  };

  static defaultProps = {
    showSidebar: true,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div
            className={cx(s.left, { [s.smallLeft]: !this.props.showSidebar })}
          >
            <QuickLinks title="Quick Links" />
          </div>
          <div className={cx(s.mid, { [s.bigMid]: !this.props.showSidebar })}>
            <CardPanel key={1}>
              <CardPanel.Header hasPin title="India Vs England" />
              The name is bond, james bond
              <hr />
              <CardPanel.Footer />
            </CardPanel>
            <CardPanel key={2}>
              <CardPanel.Header hasPin title="Musselburgh" />
              <hr />
              <CardPanel.Footer />
            </CardPanel>
          </div>
          <div className={s.right}>
            <PopularEvents />
          </div>
        </div>
        <SignUp />
        <Footer />
        <PinBar />
      </div>
    );
  }
}

export default withStyles(s)(
  connect(({ showSidebar }) => ({ showSidebar }), null)(Home),
);
