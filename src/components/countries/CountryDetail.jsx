import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { MainHeader } from "../header/Header";

export const CountryDetail = () => {
    const { country } = useParams();
    const [countryData, setCountryData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const detailedCountry = async () => {
            setIsLoading(true);

            await axios.get(`https://corona.lmao.ninja/v2/countries/${country}`)
                .then((res) => {
                    const data = res.data;
                    setIsLoading(false);
                    setCountryData(data);
                    console.log(data, 'data ra mokled')
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        detailedCountry();
    }, [country]);

    return (
        <>
            <MainHeader />
            <div className="pt-20 h-screen w-screen bg-white border-gray-200 dark:bg-gray-800 transition duration-300">
                {!isLoading && <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 transition duration-300" id="about" role="tabpanel" aria-labelledby="about-tab">
                    <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Continent: {countryData?.continent}</h1>
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={countryData?.countryInfo?.flag} alt="No Image"/>
                    <h2 className="mb-3 font-extrabold tracking-tight text-gray-900 dark:text-white">Country: {countryData?.country}</h2>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">Population: {countryData?.population}</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">Cases: {countryData?.cases}</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">Recovered: {countryData?.recovered}</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">Deaths: {countryData?.deaths}</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">One death per one million: {countryData?.oneDeathPerPeople}</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">Active: {countryData?.active}</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">Tests: {countryData?.tests}</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">Test per one million: {countryData?.testsPerOneMillion}</p>
                </div>}

                {isLoading && <div role="status">
                    <div className="flex flex-col items-center justify-center h-screen w-screen">
                        <svg aria-hidden="true" className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>}
            </div>
        </>
    )
};