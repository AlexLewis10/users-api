import React, { useState }from 'react'
import ErrorCodes from './ErrorCodes'
import Requests from './Requests'
import './App.css'

function App() {
  const [showErrorCodes, setShowErrorCodes] = useState(false)

  const handleShowErrorCodes = () => {
    showErrorCodes ? setShowErrorCodes(false) : setShowErrorCodes(true)
  }

  return (
    <div>
      <div className='btn-container'>
      <button 
        id='requests' 
        onClick={handleShowErrorCodes}
        >Requests</button>
      <button 
        id='error-codes' 
        onClick={handleShowErrorCodes}
        >Error Codes</button>
      </div>
      { showErrorCodes ? <ErrorCodes /> : <Requests />}
    </div>
  );
}

export default App
