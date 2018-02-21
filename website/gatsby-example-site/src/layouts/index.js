import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import './css/index.css';
import './css/custom-index.css';

const TemplateWrapper = ({ children }) => (
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
    {children()}
  </div>
);

export default TemplateWrapper;
