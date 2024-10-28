import { useEffect, useState } from 'react';

const useWorkersData = ( currentPage, rowsPerPage ) => {

  const [workersData, setWorkersData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const url = `https://hiring-api.simbuka.workers.dev/?page=${currentPage}&size=${rowsPerPage}`;

      fetch(url)
        .then((response) => {
          if(!response.ok) {
            throw new Error(`Responsive status: ${response.status}`)
          }
          return response.json()
        })
        .then((data) => {
          setWorkersData(data);
        });
    }
    fetchData()
  }, [currentPage, rowsPerPage])


  return { workersData, setWorkersData}
}

export default useWorkersData