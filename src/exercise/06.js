// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  const usernameInputRef = React.useRef()

  const handleSubmit = event => {
    event.preventDefault()
    const data = usernameInputRef.current.value
    onSubmitUsername(data)
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
