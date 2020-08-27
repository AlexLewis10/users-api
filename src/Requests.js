import React from 'react'
import { RedocStandalone } from 'redoc'

const Requests = () => {
  return (
    <RedocStandalone specUrl="https://raw.githubusercontent.com/AlexLewis10/users-api/master/swagger.json"
      options={{
      theme: { colors: { primary: { main: '#1E0D2D' } } }
    }}
    />
  )
}

export default Requests