import React from 'react';
import Head from '../../components/Head';
import Header from '../../components/Header';
import './index.css';
// .find(({ node: { url } }) => url === 'home').node.hero.resolutions.src
const HomePageLayout = ({ children, ietsAnders = 'wuk' }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 1600,
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0,
    }}
  >
    <Head />
    <Header />
    <p>{ietsAnders}</p>
    {children()}
  </div>
);

export default HomePageLayout;
