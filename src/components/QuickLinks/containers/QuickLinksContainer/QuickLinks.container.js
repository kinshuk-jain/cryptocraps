import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SidePanel } from '../../components';

import { showNavBar } from '../../../../actions/categoryNavActions';
import data from '../../data/sidePanel.data.json';

// TODO - onClick handler
class QuickLinksContainer extends React.Component {
  static propTypes = {
    showSidebar: PropTypes.bool,
    showNavBar: PropTypes.func.isRequired,
  };

  static defaultProps = {
    showSidebar: true,
  };

  handleCaretClick = () => {
    this.props.showNavBar(!this.props.showSidebar);
  };

  render() {
    const { showSidebar } = this.props;
    return (
      <SidePanel
        showSidebar={showSidebar}
        handleCaretClick={this.handleCaretClick}
        {...data}
      />
    );
  }
}

export const QuickLinks = connect(
  ({ showSidebar }) => ({
    showSidebar,
  }),
  dispatch => ({
    showNavBar: (payload = true) => dispatch(showNavBar(payload)),
  }),
)(QuickLinksContainer);
