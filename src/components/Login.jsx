import { useState } from "react"
import Button from "../utils/Button";

const Login = ({ isDarkTheme, setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);

    const handleUsernameInput = (e) => setUsername(e.target.value);

    const handlePasswordInput = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username !== '' && password !== '') {
            saveUserToLocalStorage()
            setUsername('');
            setPassword('');
            setIsAuthenticated(true);
        } else {
            setErrorMessage(true)
        }
    }

    const saveUserToLocalStorage = () => {
        const timestamp = Date.now();
        const user = {username, password, timestamp}
        localStorage.setItem('authToken', JSON.stringify(user));

    } 

  return (
    <div className={`flex flex-col gap-6 items-center justify-center w-full pb-20 min-h-screen ${isDarkTheme ? "bg-primary" : "bg-default"} relative`}>
        <h2 className={`text-center text-4xl font-bold text-${isDarkTheme ? 'default' : 'primary'}`}>Log In</h2>
        <form 
            action="submit"
            className={`flex flex-col gap-4 border-8  border-${isDarkTheme ? 'secondary' : 'primary'} p-8`}
        >
            <label className={`text-${isDarkTheme ? 'default' : 'primary'}`}>Username</label>
            <input 
                onChange={handleUsernameInput}
                value={username}
                className={`border-2 border-${isDarkTheme ? 'default' : 'primary'} rounded-lg px-2 outline-none`} type="text"
            />
            <label className={`text-${isDarkTheme ? 'default' : 'primary'}`}>Password</label>
            <input 
                onChange={handlePasswordInput}
                value={password}
                className={`border-2 border-${isDarkTheme ? 'default' : 'primary'} rounded-lg px-2 outline-none`} type="password"
            />
            <Button fn={handleSubmit} text='Log In' isDarkTheme={isDarkTheme}/>
            {errorMessage && <p className="text-rose-600 text-lg">Fill all input fields</p>}
        </form>    
    </div>
  )
}

export default Login