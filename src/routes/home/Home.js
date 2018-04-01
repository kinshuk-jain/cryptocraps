import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

import PostCard from '../../components/PostCard';
import PopularEvents from '../../components/PopularEvents';
import QuickLinks from '../../components/QuickLinks';
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
            <QuickLinks />
          </div>
          <div className={cx(s.mid, { [s.bigMid]: !this.props.showSidebar })}>
            <PostCard key={1} />
            <PostCard key={2} />
            <PostCard key={3} />
            <PostCard key={4} />
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
