import React from 'react'

const ErrorCodes = () => {
  
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>400</th>
            <td>The request was unacceptable, 
                often due to missing a required parameter.</td>
          </tr>
          <tr>
            <th>401</th>
            <td>No valid API key provided.</td>
          </tr>
          <tr>
            <th>402</th>
            <td>The parameters were valid but the request failed</td>
          </tr>
          <tr>
            <th>403</th>
            <td>The API key doesn't have permissions
                to perform the request.</td>
          </tr>
          <tr>
            <th>404</th>
            <td>The requested resource doesn't exist.</td>
          </tr>
          <tr>
            <th>409</th>
            <td>The request conflicts with another request
                (perhaps due to using the same idempotent key).</td>
          </tr>
          <tr>
            <th>429</th>
            <td>Too many requests hit the API too quickly. 
                We recommend an exponential backoff of your requests.</td>
          </tr>
          <tr>
            <th>500</th>
            <td>Server Errors - Something went wrong on our end</td>
          </tr>
        </tbody>
      </table>

      <h3>Common Errors</h3>
      <h4>account_already_exists</h4>
      <p>The email address provided is already taken</p>
      <h4>id_does_not_exist</h4>
      <p>The id was not found in the database</p>
      <h4>invalid_input</h4>
      <p>Either the id, email address or name
          has not been entered correctly</p>
    </div>
  )
}

export default ErrorCodes