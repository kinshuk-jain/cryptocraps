import React from 'react';
import { PopularEventComponent } from '../components';
import data from '../data/popularEvents.data.json';

export class PopularEvents extends React.Component {
  render() {
    return <PopularEventComponent {...data} />;
  }
}
