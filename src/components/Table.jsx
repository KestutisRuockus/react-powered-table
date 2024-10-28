import { useEffect, useState } from "react";
import Row from "./Row";

function Table({ workers, searchQuery, setDialogInfo, selectedRowId, isDarkTheme }) {

    const [isSortedByLastName, setIsSortedByLastName] = useState(false);
    const [isSortedByFirstName, setIsSortedByFirstName] = useState(false);
    const [currentWorkerList, setCurrentWorkerList] = useState([]);

    useEffect(() => {
        setCurrentWorkerList(workers);
    }, [workers]);

    const sortByFirstName = () => {
        const sortedList = [...currentWorkerList].sort((a, b) => isSortedByFirstName ? b.firstName.localeCompare(a.firstName) : a.firstName.localeCompare(b.firstName));
        setCurrentWorkerList(sortedList);
        setIsSortedByFirstName(!isSortedByFirstName);
        setIsSortedByLastName(false);
    }

    const sortByLastName = () => {
        const sortedList = [...currentWorkerList].sort((a, b) => isSortedByLastName ? b.lastName.localeCompare(a.lastName) : a.lastName.localeCompare(b.lastName));
        setCurrentWorkerList(sortedList);
        setIsSortedByLastName(!isSortedByLastName);
        setIsSortedByFirstName(false);
    }

  return (
    <table className={`border-8  border-${isDarkTheme ? 'secondary' : 'primary'} sm:w-2/3 w-11/12 mt-20 bg-secondary rounded-lg`}>
        <thead>
            <tr className="text-center font-semibold">
                <td className="border-2 border-black">
                    First name 
                    <span 
                        onClick={sortByFirstName}
                        className="cursor-pointer">{isSortedByFirstName ? String.fromCharCode(9650) : String.fromCharCode(9660) }
                    </span>
                </td>
                <td className="border-2 border-black">
                    Last name 
                    <span 
                        onClick={sortByLastName}
                        className="cursor-pointer">
                        {isSortedByLastName ? String.fromCharCode(9650) : String.fromCharCode(9660)}
                    </span>
                </td>
                <td className="border-2 border-black"></td>
            </tr>
        </thead>
        <tbody>
            {currentWorkerList.map((worker) => <Row key={worker.id} person={worker} searchQuery={searchQuery} setDialogInfo={setDialogInfo} selectedRowId={selectedRowId}/>)}
        </tbody>
    </table>
  )
}

export default Table;