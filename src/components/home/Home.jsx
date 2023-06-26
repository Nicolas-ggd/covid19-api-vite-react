import { useState, useEffect } from "react";
import axios from "axios";

import GroupIcon from '@mui/icons-material/Group';
import { MainHeader } from "../header/Header";

export const Home = ({ themeClass, isDarkMode }) => {
  const [isUserList, setIsUserList] = useState(null);
  const [onlineUserData, setOnlineUserData] = useState(null);
  const userToken = localStorage.getItem('access_token');

  useEffect(() => {
    const getUserList = async () => {
      await axios.get('http://localhost:8000/user/user-list', {
        headers: {
          "Authorization": `Bearer ${userToken}`
        }
      })
        .then((res) => {
          const data = res.data;
          setIsUserList(data)
        })
    };

    const getOnlineUserList = async () => {
      await axios.get('http://localhost:8000/user/online-user-list', {
        headers: {
          "Authorization": `Bearer ${userToken}`
        }
      })
        .then((res) => {
          const data = res.data;
          setOnlineUserData(data);
          console.log(res.data, 'online users')
        });
    };

    getOnlineUserList();
    getUserList();
  }, [])

  return (
    <div className={`w-full h-full bg-grey-50 ${themeClass}`}>
      <MainHeader themeClass={themeClass} isDarkMode={isDarkMode} />

      <div className="px-10 flex justify-between">
        <div className="pt-10">
          <div className={`max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${isDarkMode ? 'bg-grey-800 border-gray-700' : 'bg-white'}`}>
            <GroupIcon style={{ fontSize: '35px' }} className={`${isDarkMode ? 'text-white' : 'text-grey-900'}`} />
            <a href="#">
              <h5 className={`mb-2 text-2xl font-semibold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Need a help in Claim?</h5>
            </a>
            <p className={`mb-3 font-normal text-gray-500 dark:text-gray-400 ${isDarkMode ? 'text-white' : 'text-grey-900'}`}>Total Users: {isUserList?.length}</p>
          </div>
        </div>

        <div className="pt-10">
          <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

            <div className="flex items-center justify-between mb-4">
              {onlineUserData && <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Online Customers</h5>}
              {!onlineUserData && (<div role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <span class="sr-only">Loading...</span>
              </div>)}
            </div>

            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                {!onlineUserData && (
                  <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
                {onlineUserData && onlineUserData?.map((item, index) => {
                  return (
                    <li className="py-3 sm:py-4" key={index}>
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {item?.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {item?.email}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {item?.online && <span>online</span>}
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};