import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PopularEvents.css';

class PopularEvents extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    // data: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    title: 'Popular Events',
    // data: [],
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.title}>{this.props.title}</div>
        <div className={s.question}>India Vs England</div>
        <div className={s.question}>Ronnie O Sullivan</div>
        <div className={s.question}>Ford Mayweather Bout</div>
        <div className={s.question}>Chelsea vs Bayern Munchen</div>
        <div className={s.question}>Musselburgh</div>
        <div className={s.question}>Barcelona vs Real Madrid</div>
        <div className={s.question}>Chelsea vs Bayern Munchen</div>
        <div className={s.question}>Musselburgh</div>
        <div className={s.question}>Barcelona vs Real Madrid</div>
      </div>
    );
  }
}

export default withStyles(s)(PopularEvents);
