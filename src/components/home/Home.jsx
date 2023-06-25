import { useState, useEffect } from "react";
import axios from "axios";

import GroupIcon from '@mui/icons-material/Group';
import { MainHeader } from "../header/Header";

export const Home = ({ themeClass, isDarkMode }) => {
  const [isUserList, setIsUserList] = useState(null);

  useEffect(() => {
    const getUserList = async () => {
      await axios.get('http://localhost:8000/user/user-list', {
        headers: {
          "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJfaWQiOiI2NDkzNzQ3ZjE1NGZjZjRkYTFmMTBhYTIifSwiaWF0IjoxNjg3NzE1ODQxLCJleHAiOjE2OTAzMDc4NDF9.ztmTR0PNqxkIXaLsB0j57BrXj782d8zRYY62uLblLPk'
        }
      })
        .then((res) => {
          const data = res.data;
          setIsUserList(data)
        })
    };

    getUserList();
  }, [])

  return (
    <div className={`w-full h-full bg-grey-50 ${themeClass}`}>
      <MainHeader themeClass={themeClass} isDarkMode={isDarkMode} />

      <div className="px-10">
        <div className="pt-10">
          <div className={`max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${isDarkMode ? 'bg-grey-800 border-gray-700' : 'bg-white'}`}>
            <GroupIcon style={{ fontSize: '35px'}} className={`${isDarkMode ? 'text-white' : 'text-grey-900'}`} />
            <a href="#">
              <h5 className={`mb-2 text-2xl font-semibold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Need a help in Claim?</h5>
            </a>
            <p className={`mb-3 font-normal text-gray-500 dark:text-gray-400 ${isDarkMode ? 'text-white' : 'text-grey-900'}`}>Total Users: {isUserList?.length}</p>
          </div>
        </div>
      </div>

    </div>
  );
};