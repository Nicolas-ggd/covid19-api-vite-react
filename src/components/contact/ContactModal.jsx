import { useState } from "react";
import axios from "axios";

export const ContactModal = ({ onClose }) => {
    const [isContact, setIsContact] = useState({
        email: '',
        contactType: '',
        text: ''
    })

    const sendContactInfo = async () => {
        await axios.post('http://localhost:8000/contact/create-contact', {
            contactType: isContact?.contactType,
            text: isContact?.text
        })
    };

    return (
        <div className="absolute flex align-center justify-center top-0 left-0 right-0 z-50 w-full h-full p-4" style={{ background: '#00000080' }}>
            <div className="relative w-full max-w-md max-h-full py-80">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={onClose} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Write Text</h3>
                        <form className="space-y-6" onSubmit={sendContactInfo}>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                    onChange={(e) => {
                                        setIsContact((prevData) => ({
                                            ...prevData,
                                            email: e.target.value
                                        }));
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Type</label>
                                <input
                                    type="text"
                                    name="text"
                                    placeholder="contact type..."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                    onChange={(e) => {
                                        setIsContact((prevData) => ({
                                            ...prevData,
                                            contactType: e.target.value
                                        }));
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text</label>
                                <textarea
                                    type="text"
                                    name="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="write text..."
                                    required
                                    onChange={(e) => {
                                        setIsContact((prevData) => ({
                                            ...prevData,
                                            text: e.target.value
                                        }));
                                    }}
                                />
                            </div>
                            <button type="button" onClick={sendContactInfo} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};