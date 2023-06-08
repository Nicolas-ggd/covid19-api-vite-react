import React, { useState } from "react";
import axios from "axios";

export const SignUp = ({ closeSignUp }) => {
    const [isError, setIsError] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const acceptTermsCheckbox = () => {
        setIsChecked(true);
    };

    const submitSignUpData = async (event) => {
        if (signUpData?.name?.length === 0 ||
            signUpData?.email?.length === 0 ||
            signUpData?.password?.length === 0 ||
            signUpData?.confirmPassword?.length === 0 ||
            signUpData?.confirmPassword !== signUpData?.password
        ) {
            return setIsError(true);
        }

        event.preventDefault();

        await axios.post("http://localhost:8000/register", {
            name: signUpData?.name,
            email: signUpData?.email,
            password: signUpData?.password,
        })
            .then(() => {
                closeSignUp();
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
                            Create and account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitSignUpData}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input
                                    style={{ borderColor: isError && signUpData?.name?.length === 0 ? 'red' : '' }}
                                    type="name"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                    placeholder="your name"
                                    required=""
                                    onChange={(e) => {
                                        setSignUpData((prevSendData) => ({
                                            ...prevSendData,
                                            name: e.target.value
                                        }));
                                    }}
                                />
                            </div>
                            {isError && signUpData?.name?.length <= 0 && <span style={{ color: "red", margin: "3px" }}>Please fill the name</span>}

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    style={{ borderColor: isError && signUpData?.email?.length === 0 ? 'red' : '' }}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                    placeholder="name@company.com"
                                    required=""
                                    onChange={(e) => {
                                        setSignUpData((prevSendData) => ({
                                            ...prevSendData,
                                            email: e.target.value
                                        }));
                                    }}
                                />
                            </div>
                            {isError && signUpData?.email?.length <= 0 && <span style={{ color: "red", margin: "3px" }}>Please fill the email</span>}

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    style={{ borderColor: isError && signUpData?.password?.length === 0 ? 'red' : '' }}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                    required=""
                                    onChange={(e) => {
                                        setSignUpData((prevSendData) => ({
                                            ...prevSendData,
                                            password: e.target.value
                                        }));
                                    }}
                                />
                            </div>
                            {isError && signUpData?.password?.length <= 0 && <span style={{ color: "red", margin: "3px" }}>Please fill the password</span>}

                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input
                                    style={{ borderColor: isError && signUpData?.confirmPassword !== signUpData?.password || isError && signUpData?.confirmPassword?.length === 0 ? 'red' : '' }}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                    required=""
                                    onChange={(e) => {
                                        setSignUpData((prevSendData) => ({
                                            ...prevSendData,
                                            confirmPassword: e.target.value
                                        }));
                                    }}
                                />
                            </div>
                            {isError && signUpData?.confirmPassword !== signUpData?.password || isError && signUpData?.confirmPassword?.length === 0 && <span style={{ color: "red", margin: "3px" }}>Confirmed password is incorrect!</span>}

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required=""
                                        checked={isChecked}
                                        onChange={acceptTermsCheckbox}
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            {isError && isChecked === false && <span style={{ color: "red", margin: "5px" }}>You need to accept terms</span>}
                            <button onClick={submitSignUpData} type="button" className="w-full text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a onClick={closeSignUp} className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer">Login here</a>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};