import React from 'react';
import { RedocStandalone } from 'redoc'

function App() {
  return (
    <div>
      <p>Hello</p>
      <RedocStandalone specUrl="url/to/your/spec"/>
    </div>
  );
}

export default App;
