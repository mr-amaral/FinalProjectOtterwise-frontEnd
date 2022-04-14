import { Routes, Route } from "react-router-dom"
import { AuthProvider, RequireAuth } from "./context/auth-context"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Profile from "./routes/Profile"
import Signup from "./routes/Signup"
import { ChangeContextProvider } from "./context/petweetChange-context"

function App() {
  return (
    <AuthProvider>
      <ChangeContextProvider>
        <Routes>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            <Route
              path="/profile/:username"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </ChangeContextProvider>
    </AuthProvider>
  )
}

export default App
