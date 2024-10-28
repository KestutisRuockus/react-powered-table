import { useState } from 'react'

import useWorkersData from "../hooks/useWorkerData"
import Table from "../components/Table"
import Pagination from "../components/Pagination"
import Search from "../components/Search"
import Dialog from "../components/Dialog"
import LogOut from '../components/LogOut'

const Home = ({ isDarkTheme, setIsAuthenticated }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [dialogInfo, setDialogInfo] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

  const { workersData, setWorkersData } = useWorkersData(currentPage, rowsPerPage);

  return (
    <div className={`flex flex-col gap-6 items-center w-full pb-20 min-h-screen ${isDarkTheme ? "bg-primary" : "bg-default"} relative`}>
          <LogOut isDarkTheme={isDarkTheme} setIsAuthenticated={setIsAuthenticated}/>
          <Table workers={workersData} searchQuery={searchQuery} setDialogInfo={setDialogInfo} selectedRowId={dialogInfo?.id} isDarkTheme={isDarkTheme}/>
          <Pagination rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} isDarkTheme={isDarkTheme}/>
          <Search setSearchQuery={setSearchQuery} workersData={workersData} setWorkersData={setWorkersData} isDarkTheme={isDarkTheme}/>
          {dialogInfo && <Dialog dialogInfo={dialogInfo} setDialogInfo={setDialogInfo} isDarkTheme={isDarkTheme}/>}
        </div>
  )
}

export default Home