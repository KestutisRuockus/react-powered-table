const Button = ({fn, text, isDarkTheme}) => {
  return (
    <button
      className={`bg-${isDarkTheme ? 'secondary' : 'primary'} text-${isDarkTheme ? 'primary' : 'default'} px-2 py-1 rounded-lg hover:opacity-50 transition-color duration-300`}
      onClick={fn}
    >
      {text}
    </button>
  )
}

export default Button