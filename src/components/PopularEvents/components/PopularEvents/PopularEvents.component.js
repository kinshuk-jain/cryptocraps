import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PopularEvents.component.css';
import { CardPanel } from '../../../CardPanel';

const PopularEventComponent = props => {
  const { title = '', events = [] } = props;
  return (
    <div className={s.container}>
      <div className={s.title}>{title}</div>
      {events.map((event, i) => (
        <CardPanel key={i}>
          <CardPanel.Header
            link={event.link}
            className={s.event}
            title={event.title}
          />
          <CardPanel.Footer
            timeToGoLive={event.timeToGoLive}
            valueTraded={event.tradeValue}
          />
        </CardPanel>
      ))}
    </div>
  );
};

PopularEventComponent.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(s)(PopularEventComponent);
