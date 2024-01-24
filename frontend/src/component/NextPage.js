// NextPage.js
import React from 'react';

const NextPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>Next Page</h1>
      <p>This is the next page content.</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default NextPage;
