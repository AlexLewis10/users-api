import React, { useState }from 'react'
import ErrorCodes from './ErrorCodes'
import Requests from './Requests'
import '../styles/App.css'

function App() {
  const [showErrorCodes, setShowErrorCodes] = useState(false)
  const [showRequests, setShowRequests] = useState(true)

  const handleShowErrorCodes = () => {
    setShowErrorCodes(true)
    setShowRequests(false)
  }
  
  const handleShowRequests = () => {
    setShowRequests(true)
    setShowErrorCodes(false)
  }

  return (
    <div>
      <div id='btn-container'>
      <button 
        id='requests' 
        onClick={handleShowRequests}
        >Requests</button>
      <button 
        id='error-codes' 
        onClick={handleShowErrorCodes}
        >Error Codes</button>
      </div>
      { showRequests ? <Requests /> : null }
      { showErrorCodes ? <ErrorCodes /> : null}
    </div>
  );
}

export default App
