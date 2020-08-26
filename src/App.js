import React from 'react';
import { RedocStandalone } from 'redoc'

function App() {
  return (
    <div>
      <p>Dave</p>
      <RedocStandalone specUrl="https://raw.githubusercontent.com/AlexLewis10/users-api/master/swagger.json"/>
    </div>
  );
}

export default App;
