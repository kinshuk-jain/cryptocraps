import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PopularEvents.css';

class PopularEvents extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.string), // eslint-disable-line no-unused-prop-types
  };

  static defaultProps = {
    title: 'Popular Events',
    data: [], // eslint-disable-line no-unused-prop-types
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.title}>{this.props.title}</div>
        <div className={s.question}>question 1</div>
        <div className={s.question}>question 1</div>
        <div className={s.question}>question 1</div>
      </div>
    );
  }
}

export default withStyles(s)(PopularEvents);
