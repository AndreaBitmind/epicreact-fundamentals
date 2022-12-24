// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  const [userData, setUserData] = React.useState('')

  const usernameInputRef = React.useRef()

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(userData)
  }

  const handleChange = event => {
    const {value} = event.target
    setUserData(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          ref={usernameInputRef}
          type="text"
          id="userName"
          name="username"
          onChange={handleChange}
          value={userData}
        />
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
