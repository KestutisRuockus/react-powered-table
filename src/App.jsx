import { useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";
import useAuth from "./hooks/useAuth";
import ToggleTheme from "./components/ToggleTheme";

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { isAuthenticated, setIsAuthenticated, } = useAuth();

  return (
      <>
        <ToggleTheme isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}/>
        {!isAuthenticated && <Login isDarkTheme={isDarkTheme} setIsAuthenticated={setIsAuthenticated}/>}
        {isAuthenticated && <Home isDarkTheme={isDarkTheme} setIsAuthenticated={setIsAuthenticated}/>}
      </>
  )
}

export default App
