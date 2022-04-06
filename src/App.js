import { Routes, Route } from "react-router-dom"
import { AuthProvider, RequireAuth } from "./context/auth-context"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Profile from "./routes/Profile"
// import Layout from "./components/Layout"
// import PublicPage from "./routes/PublicPage"
import ProtectedPage from "./routes/ProtectedPage"
import PublicPage from "./routes/PublicPage"
import Signup from "./routes/Signup"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
