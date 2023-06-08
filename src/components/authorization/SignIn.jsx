import React, { useState, useEffect } from "react";
import axios from "axios";

export const SignIn = ({ closeSignIn }) => {
    const [isError, setIsError] = useState(false);
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });

    const submitSignInData = async (event) => {
        if (signInData?.email?.length === 0 || signInData?.password?.length === 0) {
            return setIsError(true);
        }
        event.preventDefault();

        await axios.post("http://localhost:8000/auth", {
            email: signInData.email,
            password: signInData.password,
        })
            .then((res) => {
                const data = res.data;
                console.log(data);
            });
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitSignInData}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    style={{ borderColor: isError && signInData?.email?.length === 0 ? 'red' : '' }}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                    placeholder="name@company.com"
                                    required=""
                                    onChange={(e) => {
                                        setSignInData((prevSendData) => ({
                                            ...prevSendData,
                                            email: e.target.value
                                        }));
                                    }}
                                />
                            </div>
                            {isError && signInData?.email?.length <= 0 && <span style={{ color: "red", margin: "3px" }}>Please fill the email</span>}

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    style={{ borderColor: isError && signInData?.password?.length === 0 ? 'red' : '' }}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                    required=""
                                    onChange={(e) => {
                                        setSignInData((prevSendData) => ({
                                            ...prevSendData,
                                            password: e.target.value
                                        }));
                                    }}
                                />
                            </div>
                            {isError && signInData?.password?.length === 0 && <span style={{ color: "red", margin: "3px" }}>Please fill the passowrd</span>}

                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>

                            <button onClick={submitSignInData} type="button" className="w-full text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 outline-none">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Dont have an account yet? <a onClick={closeSignIn} className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer outline-none">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};