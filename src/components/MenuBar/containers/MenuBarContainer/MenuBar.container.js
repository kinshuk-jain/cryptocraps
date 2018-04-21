import React from 'react';
import { MenuBarComponent } from '../../components';
import data from '../../data/menubar.data.json';

export class MenuBar extends React.Component {
  render() {
    return <MenuBarComponent {...data} />;
  }
}
