import React from 'react';
import { RedocStandalone } from 'redoc'
import ErrorCodes from './ErrorCodes'

function App() {
  return (
    <div>
      <button>Requests</button>
      <button id='error-codes'>Error Codes</button>
      <RedocStandalone specUrl="https://raw.githubusercontent.com/AlexLewis10/users-api/master/swagger.json"
        options={{
        theme: { colors: { primary: { main: '#1E0D2D' } } }
        }}
      />
      <ErrorCodes />
    </div>
  );
}

export default App;
