import React from 'react';
import { RedocStandalone } from 'redoc'

function App() {
  return (
    <div>
      <RedocStandalone specUrl="https://raw.githubusercontent.com/AlexLewis10/users-api/master/swagger.json"
        options={{
        theme: { colors: { primary: { main: '#1E0D2D' } } }
        }}
      />
      
    </div>
  );
}

export default App;
