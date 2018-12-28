import './css/index.css';
import './css/custom-index.css';
import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';

const TemplateWrapper = ({ children }) => (
  <div className="layout">
    <Head />
    <Header />
    {children()}
  </div>
);

export default TemplateWrapper;
