import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import './css/index.css';
import './css/custom-index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Head />
    <Header />
    {children()}
  </div>
);

export default TemplateWrapper;
