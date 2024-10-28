const Row = ({ person, searchQuery, setDialogInfo, selectedRowId }) => {

    const handeMoreInformationButton = () => setDialogInfo(person)

  return (
    <tr 
      className={` sm:text-base text-xs
      ${person.id === selectedRowId ? 'bg-activeRowBg text-default' : ''}
      ${person.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || person.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ? 'font-bold' : 'font-normal'} 
      ${searchQuery === '' ? 'font-normal' : ''}`}
    >
      <td className={`w-2/5 border-2 border-black ps-4`}>{person.firstName}</td>
      <td className="w-2/5 border-2 border-black ps-4">{person.lastName}</td>
      <td className={`w-1/5 ${person.id === selectedRowId ? 'bg-activeRowBg text-default' : ''}`}>
        <button 
          onClick={handeMoreInformationButton}
          className="border-2 border-primary px-2 font-normal w-full hover:bg-primary hover:text-default transition-colors duration-300"
        >
          More information
        </button>
      </td>
    </tr>
  )
}

export default Row