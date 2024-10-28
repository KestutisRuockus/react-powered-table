
const ToggleTheme = ({ isDarkTheme, setIsDarkTheme }) => {

    const toggleTheme = () => setIsDarkTheme(!isDarkTheme); 

  return (
    <div className={`flex gap-2 ps-6 pt-6 text-xl ${isDarkTheme ? 'bg-primary' : 'bg-default'} ${isDarkTheme ? 'text-textPrimary' : 'text-textDefault'}`}>
        <p>{isDarkTheme ? "Dark" : "Light"} Theme</p>
        <div onClick={toggleTheme} className={`flex justify-center items-center w-16 h-8 rounded-full ${isDarkTheme ? 'bg-default' : 'bg-primary'} relative cursor-pointer`}>
            <div className={`w-5 h-4 rounded-full ${isDarkTheme ? 'bg-primary' : 'bg-secondary'} absolute ${isDarkTheme ? 'left-2' : 'right-2'}`}></div>
        </div>
    </div>
  )
}

export default ToggleTheme