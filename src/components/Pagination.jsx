import Button from "../utils/Button";

const Pagination = ({ rowsPerPage, setRowsPerPage, currentPage, setCurrentPage, isDarkTheme }) => {

    const handleSelectElement = (e) => {
        setRowsPerPage(e.target.value)
    }

    const handlePreviousButton = () => {
        currentPage <= 1 ? '' : setCurrentPage(currentPage - 1);
    }
    const handleNextButton = () => {
        setCurrentPage(currentPage +1);
    }

    const selectRowsCountElement = () => {
        const countOfRowsPerPage = [5, 10, 15, 20, 25 ]
        return (
            <select 
                onChange={handleSelectElement} 
                value={rowsPerPage}
                className={`border-2 border-${isDarkTheme ? 'secondary' : 'primary'} rounded-t-lg px-2`}
            >
                {countOfRowsPerPage.map((count) => <option key={count} value={count}>{count}</option>)}
            </select>
        )
    }

    const pagesNumbers = () => {
        const surroundingPageCount = 3;
        return (
            <div className="flex gap-4">
                {Array.from({ length: surroundingPageCount * 2 + 1 }, (_, i) => (
            <p 
                onClick={() => setCurrentPage(currentPage - surroundingPageCount + i)}
                className={`${currentPage - surroundingPageCount + i === currentPage ? 'text-textPagination font-semibold text-xl' : ''} text-${isDarkTheme ? 'default' : 'primary'} cursor-pointer hover:text-textPagination transition-color duration-300`} 
                key={i}>
                {(currentPage - surroundingPageCount + i) < 1 ? '' : currentPage - surroundingPageCount + i}
            </p>
        ))}
            </div>
        )
    }

  return (
        <div className="flex lg:flex-row flex-col gap-8 sm:w-2/3 w-11/12">
            <div className="flex gap-2">
                <Button fn={handlePreviousButton} text='Previous' isDarkTheme={isDarkTheme}/>
                <Button fn={handleNextButton} text='Next' isDarkTheme={isDarkTheme}/>
                {selectRowsCountElement()}
            </div>
            <div className="flex lg:m-0 m-auto">
                {pagesNumbers()}
            </div>
        </div>
  )
}

export default Pagination