import Button from "../utils/Button"

const Dialog = ({ dialogInfo, setDialogInfo, isDarkTheme }) => {

    const handleClose = () => setDialogInfo(null)

  return (
    <div className={`flex flex-col gap-1 w-[300px] border-8 bg-${isDarkTheme ? 'default' : 'secondary'} border-${isDarkTheme ? 'default' : 'primary'} p-4 relative`}>
      <div>
        <Button fn={handleClose} text='Close' isDarkTheme={isDarkTheme}/>
      </div>
      <p>· Identification number: <span className="font-semibold">{dialogInfo.customerIdentificationCode}</span></p>
      <p>· First name: <span className="font-semibold">{dialogInfo.firstName}</span></p>
      <p>· Last name: <span className="font-semibold">{dialogInfo.lastName}</span></p>
      <p>· Birth date: <span className="font-semibold">{dialogInfo.birthDate}</span></p>
      <p>· Gender: <span className="font-semibold">{dialogInfo.gender}</span></p>
    </div>
  )
}

export default Dialog