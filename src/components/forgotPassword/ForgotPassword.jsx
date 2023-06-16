import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, Link, useNavigate } from "react-router-dom";

import { Notification } from "../notification/Notification";

export const ForgotPassword = ({ toggleForgotPassword }) => {
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);
    const [isSendingError, setIsSendingError] = useState(false);
    const [isSendInEmail, setIsSendInEmail] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [resetData, setResetData] = useState({
        email: "",
    });
    const [searchToken, setSearchToken] = useSearchParams();
    const searchParamsToken = searchToken.get("token")
    const [newPassword, setNewPassword] = useState({
        password: "",
        confirmPassword: "",
    });

    const toggleNotification = () => {
        setIsClosed(prevIsClosed => !prevIsClosed);
    };

    const submitEmailToResetPassword = async () => {
        if (resetData?.email?.length === 0) {
            return setIsSendingError(true)
        }

        await axios.post('http://localhost:8000/reset-password', {
            email: resetData?.email
        })
            .then((res) => {
                setIsSendInEmail(true);
            })
    };

    const submitUserToken = async (event) => {
        event.preventDefault();
        if (newPassword?.password?.length === 0 && newPassword?.confirmPassword?.length === 0) {
            return setIsError(true)
        }
        
        if (searchToken.get("token")) {
            try {
                await axios.post('http://localhost:8000/reset-password/user-token', {
                    token: searchToken.get("token"),
                    password: newPassword?.password,
                    confirmPassword: newPassword?.confirmPassword,
                })
                    .then((res) => {
                        const data = res.data;
                        console.log(data)
                        localStorage.setItem('access_token', data?.access_token);
                        navigate('/');
                    });
            } catch (error) {
                console.log(error)
            }
        }
    };

    useEffect(() => {
        submitUserToken();
    }, [searchToken]);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                {searchParamsToken === null && <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Enter your email to reset password
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitEmailToResetPassword} >
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    style={{ borderColor: isSendingError && resetData?.email?.length === 0 ? 'red' : '' }}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                    placeholder="name@company.com"
                                    required=""
                                    onChange={(e) => {
                                        setResetData((prevSendData) => ({
                                            ...prevSendData,
                                            email: e.target.value
                                        }));
                                    }}
                                />
                                {isSendingError && resetData?.email?.length === 0 && <span style={{ color: "red", margin: "3px" }}>Please enter the email</span>}

                                <button onClick={submitEmailToResetPassword} type="button" className="w-full mt-2 transition delay-50 border-none text-white bg-sky-400 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 outline-none">Submit</button>
                            </div>
                        </form>
                        <Link onClick={toggleForgotPassword} to="/" className="text-sm font-light text-primary-600 hover:underline cursor-pointer">
                            Back to sign in.
                        </Link>
                    </div>
                </div>}
                {searchParamsToken !== null &&
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Reset your password
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={submitUserToken}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                                    <input
                                        style={{ borderColor: isError && newPassword?.password?.length === 0 ? 'red' : '' }}
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                        placeholder="name@company.com"
                                        required=""
                                        onChange={(e) => {
                                            setNewPassword((prevSendData) => ({
                                                ...prevSendData,
                                                password: e.target.value
                                            }));
                                        }}
                                    />
                                    {isError && newPassword?.password?.length === 0 && <span style={{ color: "red", margin: "3px" }}>Please enter the new password</span>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input
                                        style={{ borderColor: isError && newPassword?.confirmPassword?.length === 0 ? 'red' : '' }}
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                        placeholder="name@company.com"
                                        required=""
                                        onChange={(e) => {
                                            setNewPassword((prevSendData) => ({
                                                ...prevSendData,
                                                confirmPassword: e.target.value
                                            }));
                                        }}
                                    />
                                    {isError && newPassword?.confirmPassword?.length === 0 && <span style={{ color: "red", margin: "3px" }}>Please enter the confrim password</span>}

                                </div>
                                <button  type="submit" className="w-full mt-2 transition delay-50 border-none text-white bg-sky-400 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 outline-none">Submit</button>
                            </form>
                            <Link onClick={toggleForgotPassword} to="/" className="text-sm font-light text-primary-600 hover:underline cursor-pointer">
                                Back to sign in.
                            </Link>
                        </div>
                    </div>
                }
            </div>
            {isSendInEmail && <Notification onClose={toggleNotification} message={'Reset password link sended in your email.'} />}
        </section>
    );
};