// import React, { useRef, useState } from 'react'
// // import { useAuth } from "../contexts/AuthContext"
// import { Link, useHistory } from "react-router-dom"


// const Login = () => {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   // const { login } = useAuth()
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
//   const history = useHistory()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       setError('')
//       setLoading(true)
//       // await login(emailRef.current.value, passwordRef.current.value)
//       // history.push("/archive")
//     } catch {
//       setError("Failed to find account")
//     }
//     setLoading(false)
//   }

//   const checkAuth = () => {
//     // if isAuthenticated  = true, return path to homepage
//     // if false, stay on login with error/warning displayed
//     return '/homepage'
//   }

//   return (
//     <>
//       <div>
//           <h2 className="text-center mb-4">Log In</h2>
//           {/* {error && <Alert variant="danger">{error}</Alert>} */}
//           <form onSubmit={handleSubmit}>
//             <div id="email">
//               <label>Email</label>
//               <input type="email" ref={emailRef} required />
//             </div>
//             <div id="password">
//               <label>Password</label>
//               <input type="password" ref={passwordRef} required />
//             </div>
//             <Link to={ checkAuth }>
//               <button disabled={loading} className="w-100" type="submit">Log In</button>
//             </Link>
//           </form>
//       </div>
//       <div className="w-100 text-center mt-2">
//         Don't have an account? <Link to="/sign-up">Sign Up</Link>
//       </div>
//     </>
//   )
// }

// export default Login;
import React from 'react'

export default function Login() {
  return (
    <div>
      Login Page
    </div>
  )
}
