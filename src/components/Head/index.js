import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from '../../../siteConfig';

class Head extends Component {
  render() {
    return (
      <Helmet title={config.siteTitle}>
        <link
          href="https://fonts.googleapis.com/css?family=Bungee+Hairline|Cutive+Mono|Michroma|Poiret+One|Unica+One|Wire+One"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cutive+Mono|Dosis|Josefin+Slab|Muli|Quicksand|Titillium+Web"
          rel="stylesheet"
        />
         <meta name="viewport" content="width=device-width, initial-scale = 1.0, minimum-scale=1.0, user-scalable=no" />
         {/* minimum scale did the trick */}
         <meta name="apple-mobile-web-app-capable" content="yes" />
         {config.meta.map(({name, content}) => <meta name={name} content={content} />)}
      </Helmet>
    );
  }
}

export default Head;
