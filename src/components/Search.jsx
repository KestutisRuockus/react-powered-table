import { useRef, useState } from "react"
import Button from "../utils/Button";

const Search = ({ setSearchQuery, workersData, setWorkersData, isDarkTheme }) => {
    const [inputValue, setInputValue] = useState('');
    const filter = useRef('');
    const previousWorkersList = useRef([]);

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSearchButtonClick = () =>{
        setSearchQuery(inputValue);
        previousWorkersList.current = workersData;
        filter.current = inputValue.toLowerCase();
        setInputValue('')
    }

    const filterMatchingResults = () => {
      let filteredWorkersList = [];
      workersData.map((worker) => {
        if(worker.firstName.toLowerCase().includes(filter.current) || worker.lastName.toLowerCase().includes(filter.current)){
          filteredWorkersList = [...filteredWorkersList, worker]
        }
      });
      setWorkersData(filteredWorkersList)
    }

    const clearFilter = () => {
      if(previousWorkersList.current.length !== 0) {
        setWorkersData(previousWorkersList.current)
      };
        
    };

  return (

    <div className="flex lg:flex-row flex-col gap-4 lg:justify-center sm:w-2/3 w-11/12">
      <div className="flex gap-1">
        <input 
          className={`border-2 border-${isDarkTheme ? 'secondary' : 'primary'} px-4 py-1 rounded-lg outline-none max-[450px]:w-full`}
          onKeyDown={(e) => e.key === 'Enter' ? handleSearchButtonClick() : ''}
          onChange={handleInputChange} 
          value={inputValue}
          type="text" 
          placeholder="Search..." 
        />
        <Button fn={handleSearchButtonClick} text='Search' isDarkTheme={isDarkTheme}/>
      </div>
      <div className="flex max-[450px]:flex-col gap-4">
        <Button fn={filterMatchingResults} text='Filter Matching Results' isDarkTheme={isDarkTheme}/>
        <Button fn={clearFilter} text='Clear Matching Results' isDarkTheme={isDarkTheme}/>
      </div>
    </div>
  )
}

export default Search