import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const MainHeader = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Perform search logic with the searchValue
        console.log('Searching for:', searchValue);
    };

    const userLogOut = async () => {
        await axios.get("http://localhost:8000/logout", {})
            .then(() => {
                localStorage.removeItem('access_token');
                navigate('/')
            })
    };
    return (
        <>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center lg:order-2">
                        <div className="flex items-center">
                            <LogoutIcon />
                            <a onClick={userLogOut} className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log Out</a>
                        </div>

                    </div>

                    <div className="w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12">
                        <form onSubmit={handleSearchSubmit}>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-4 pl-10 block w-full appearance-none leading-normal border border-transparent rounded-lg text-left select-none truncate bg-gray-200"
                                    value={searchValue}
                                    onChange={handleSearchChange}
                                    placeholder="Search Movies"
                                />
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                                    <svg className="fill-current text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                    </svg>
                                </div>
                            </div>
                            <button type="submit" className="hidden">Submit</button>
                        </form>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li className="flex">
                                <HomeOutlinedIcon />
                                <Link to="/home" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </nav>
        </>
    );
};