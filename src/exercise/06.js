// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  //Extra Credit 2
  // const [error, setError] = React.useState(null)

  //Extra Credit 3
  const [username, setUsername] = React.useState('')

  //Extra Credit 1
  const usernameRef = React.useRef(null)

  const handleSubmit = event => {
    event.preventDefault()

    //Basic
    //const value = event.target.elements.username.value

    //Extra Credit 1
    // const value = usernameRef.current.value
    // onSubmitUsername(value)

    //Extra Credit 3
    onSubmitUsername(username)
  }

  //Extra Credit 2
  // const handleChange = event => {
  //   const value = event.target.value
  //   const isValid = value === value.toLowerCase()
  //   setError(isValid ? null : 'Username must be lower case')
  // }

  //Extra Credit 3
  const handleChange = event => {
    const value = event.target.value
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          ref={usernameRef}
          onChange={handleChange}
          value={username}
        />
        {/* Extra Credit 2 */}
        {/* {error && (
          <div role="alert" style={{color: 'red'}}>
            {error}
          </div>
        )} */}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
