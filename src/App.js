import React, { useState }from 'react'
import ErrorCodes from './ErrorCodes'
import Requests from './Requests'

function App() {
  const [showErrorCodes, setShowErrorCodes] = useState(false)

  const handleShowErrorCodes = () => {
    if (!showErrorCodes) {
      setShowErrorCodes(true)
    }
  }



  return (
    <div>
      <button>Requests</button>
      <button id='error-codes' onClick={handleShowErrorCodes}>Error Codes</button>
      { !showErrorCodes ? <Requests /> : null }
      { showErrorCodes ? <ErrorCodes /> : null }
    </div>
  );
}

export default App;
