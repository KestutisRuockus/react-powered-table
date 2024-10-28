import Button from "../utils/Button"

const LogOut = ({ isDarkTheme, setIsAuthenticated }) => {

    const logOut = () => {
      setIsAuthenticated(false);
      localStorage.setItem('authToken', '');
      }

  return (
    <div className="absolute right-6 top-0">
        <Button fn={logOut} text='Log Out' isDarkTheme={isDarkTheme}/>
    </div>
  )
}

export default LogOut