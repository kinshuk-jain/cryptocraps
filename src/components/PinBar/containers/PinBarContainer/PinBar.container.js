import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { addToPinBar } from '../../../../actions/pinBarActions';
import { PinBarComponent } from '../../components';

class PinBarContainer extends Component {
  static propTypes = {
    addToPinBar: PropTypes.func.isRequired,
    getItemAddedToPinBar: PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  };

  state = {
    eventList: {},
    expanded: false,
  };

  componentWillReceiveProps(nextProps) {
    const { eventList } = this.state;
    const { getItemAddedToPinBar = {} } = nextProps;
    const pos = eventList[getItemAddedToPinBar.link];
    if (pos) {
      // id already present in eventList, remove it
      delete eventList[getItemAddedToPinBar.link];
      this.setState({
        eventList,
        expanded: !_.isEmpty(eventList),
      });
    } else {
      // new eventId not in eventList, add it
      this.setState({
        eventList: {
          ...eventList,
          [getItemAddedToPinBar.link]: getItemAddedToPinBar.title,
        },
      });
    }
  }

  expandPinBar = () => {
    this.setState(state => ({ ...state, expanded: !state.expanded }));
  };

  render() {
    const { eventList, expanded } = this.state;
    return (
      <PinBarComponent
        expanded={expanded}
        eventList={eventList}
        closeFn={this.props.addToPinBar}
        expandPinBar={this.expandPinBar}
      />
    );
  }
}

export const PinBar = connect(
  ({ getItemAddedToPinBar }) => ({
    getItemAddedToPinBar,
  }),
  dispatch => ({
    addToPinBar: payload => dispatch(addToPinBar(payload)),
  }),
)(PinBarContainer);
