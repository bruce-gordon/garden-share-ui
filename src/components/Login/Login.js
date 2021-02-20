import React, { useRef, useState } from 'react'
// import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  // const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      // await login(emailRef.current.value, passwordRef.current.value)
      // history.push("/archive")
    } catch {
      setError("Failed to find account")
    }
    setLoading(false)
  }

  return (
    <>
      <div>
          <h2 className="text-center mb-4">Log In</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <form onSubmit={handleSubmit}>
            <div id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </div>
            <button disabled={loading} className="w-100" type="submit">Log In</button>
          </form>
      </div>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}

export default Login;
