import React, { useState }from 'react'
import ErrorCodes from './ErrorCodes'
import Requests from './Requests'

function App() {
  const [showErrorCodes, setShowErrorCodes] = useState(false)

  const handleShowErrorCodes = () => {
    showErrorCodes ? setShowErrorCodes(false) : setShowErrorCodes(true)
  }

  return (
    <div>
      <button 
        id='requests' 
        onClick={handleShowErrorCodes}
        >Requests</button>
      <button 
        id='error-codes' 
        onClick={handleShowErrorCodes}
        >Error Codes</button>
      { showErrorCodes ? <ErrorCodes /> : <Requests />}
    </div>
  );
}

export default App
