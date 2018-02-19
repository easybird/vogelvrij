import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from '../../../siteConfig';

class Head extends Component {
  render() {
    return (
      <Helmet title={config.siteTitle} meta={config.meta}>
        <link
          href="https://fonts.googleapis.com/css?family=Bungee+Hairline|Cutive+Mono|Michroma|Poiret+One|Unica+One|Wire+One"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cutive+Mono|Dosis|Josefin+Slab|Muli|Quicksand|Titillium+Web"
          rel="stylesheet"
        />
      </Helmet>
    );
  }
}

export default Head;
