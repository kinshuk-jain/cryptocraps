import React from 'react';
import { FooterComponent } from '../../components';
import data from '../../data/footer.data.json';

class Footer extends React.Component {
  render() {
    return <FooterComponent {...data} />;
  }
}

export default Footer;
