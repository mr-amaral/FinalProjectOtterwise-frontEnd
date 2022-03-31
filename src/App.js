import { Routes, Route } from "react-router-dom"
import { AuthProvider, RequireAuth } from "./context/auth-context"
import Login from "./routes/Login"
// import Layout from "./components/Layout"
// import PublicPage from "./routes/PublicPage"
import ProtectedPage from "./routes/ProtectedPage"
import Signup from "./routes/Signup"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
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
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
