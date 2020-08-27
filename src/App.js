import React, { useState }from 'react';
import { RedocStandalone } from 'redoc'
import ErrorCodes from './ErrorCodes'

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
      <RedocStandalone specUrl="https://raw.githubusercontent.com/AlexLewis10/users-api/master/swagger.json"
        options={{
        theme: { colors: { primary: { main: '#1E0D2D' } } }
        }}
      />
      { showErrorCodes ? <ErrorCodes /> : null }
    </div>
  );
}

export default App;
