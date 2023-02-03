import React from 'react';
import { Helmet } from 'react-helmet';
import Form from '../component/Form';

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>URL checker</title>
      </Helmet>

      <Form />
    </div>
  );
};

export default Home;
