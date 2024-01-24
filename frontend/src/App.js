
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Scanner = ({ scannedData, setScannedData, isTextboxEnabled, setIsTextboxEnabled }) => {
  const textboxRef = useRef();

  // useEffect with cleanup function
  useEffect(() => {
    // Set focus when the component mounts
    if (textboxRef.current) {
      textboxRef.current.focus();
      textboxRef.current.setSelectionRange(0, 0);
      // Set the cursor at the beginning
    }

    // Cleanup function: reset scannedData when component unmounts or goes out of scope
    return () => {
      setScannedData('');
      setIsTextboxEnabled(true);
    };
  }, [setScannedData, setIsTextboxEnabled]);

  // Handle key press to disable textbox
  const handleKeyDown = (e) => {
    // Check if Enter key is pressed
    if (e.key === 'Enter') {
      setIsTextboxEnabled(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>Scanned Data Example</h1>
      <input
        type="text"
        value={scannedData}
        onChange={(e) => setScannedData(e.target.value)}
        onKeyDown={handleKeyDown} // Add keydown event handler
        style={{
          width: '200px',
          padding: '10px',
          textAlign: 'center',
        }}
        ref={textboxRef}
        readOnly={!isTextboxEnabled}
        disabled={!isTextboxEnabled}
      />
      <br />
      {/* Conditionally render the link based on the value of scannedData */}
      {scannedData && <Link to="/next-page">Next</Link>}
    </div>
  );
};

const NextPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>Next Page</h1>
      <p>This is the next page content.</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

function App() {
  const [scannedData, setScannedData] = useState('');
  const [isTextboxEnabled, setIsTextboxEnabled] = useState(true); // Set it to true by default

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Scanner
              scannedData={scannedData}
              setScannedData={setScannedData}
              isTextboxEnabled={isTextboxEnabled}
              setIsTextboxEnabled={setIsTextboxEnabled}
            />
          }
        />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
