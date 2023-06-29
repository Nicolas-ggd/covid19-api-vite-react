import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { MainHeader } from "../header/Header";
import { P } from "react-html5video/dist";

export const Home = () => {
  const [isCovidData, setIsCovidData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const itemsPerPage = 7;

  useEffect(() => {
    const covidList = async () => {
      setIsLoading(true);
      await axios.get(`https://corona.lmao.ninja/v2/countries?page=${currentPage}&limit=${itemsPerPage}`)
        .then((res) => {
          const data = res.data;
          setIsLoading(false);
          setTotalPages(res.headers['x-pagination-page-count']);

          const pageCount = Math.ceil(data.length / itemsPerPage);
          setTotalPages(pageCount);

          const startIndex = (currentPage - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          const currentPageData = data.slice(startIndex, endIndex);

          setIsCovidData(currentPageData);
        })
    };

    covidList();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredData = isCovidData?.filter((country) =>
    country.country.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="w-full h-screen bg-grey-50 dark:bg-gray-800">
      <MainHeader />
      <div className="mx-10 py-20 flex justify-between">
        {isLoading && <div role="status" className="fixed top-50 w-full h-full">
          <div className="flex flex-col items-center justify-center h-screen w-screen">
            <svg aria-hidden="true" className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>}
        <form className="absolute w-80">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokelidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="text" value={filterValue} onChange={handleFilterChange} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Countries..." required />
          </div>
        </form>
        <div className="w-full h-full mt-20 relative overflow-x-auto shadow-md sm:rounded-lg">
          {!isLoading && <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
                <th scope="col" className="px-6 py-3">
                  Population
                </th>
                <th scope="col" className="px-6 py-3">
                  Cases
                </th>
                <th scope="col" className="px-6 py-3">
                  Recovered
                </th>
                <th scope="col" className="px-6 py-3">
                  Deaths
                </th>
                <th scope="col" className="px-6 py-3">
                  Active
                </th>
                <th scope="col" className="px-6 py-3">

                </th>
              </tr>
            </thead>
            <tbody>
              {isCovidData && filteredData?.map((item, index) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index}>
                    <th scope="row" className="flex items-center px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <img src={item?.countryInfo?.flag} alt='No Img' style={{ width: "50px", height: "50px", borderRadius: "50px" }} />
                      <span className="px-2">{item?.country}</span>
                    </th>
                    <td className="px-6 py-4">
                      {item?.population}
                    </td>
                    <td className="px-6 py-4">
                      {item?.cases}
                    </td>
                    <td className="px-6 py-4">
                      {item?.recovered}
                    </td>
                    <td className="px-6 py-4">
                      {item?.deaths}
                    </td>
                    <td className="px-6 py-4">
                      {item?.active}
                    </td>
                    <td className="px-6 py-4">
                      <Link to={`/${item.country}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detail</Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>}

          {!isLoading && (
            <div className="dark:bg-gray-800 flex py-6 px-2 justify-end">
              <p className="cursor-pointer dark:text-white" onClick={handlePrevPage} disabled={currentPage === 1}>
                Prev
              </p>
              <div className="flex items-center dark:text-white mx-5">
                Page: {currentPage} of {totalPages}
              </div>
              <p className="dark:text-white cursor-pointer" onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};