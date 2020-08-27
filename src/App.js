import React from 'react';
import { RedocStandalone } from 'redoc'
import Navbar from './Navbar'
import ErrorCodes from './ErrorCodes'

function App() {
  return (
    <div>
      <Navbar />
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
