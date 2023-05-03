import React from 'react'

export default function Login() {
    return (
        <div>
            <div
                className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
            >
                <div
                    className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md"
                >
                    <h1 className="text-left text-1xl font-bold">Welcome to Logistics Orchestration</h1>
                    <div className="mt-10">
                        <form id="form">
                            <div className="flex flex-col mb-6">
                                <label
                                    htmlFor="username"
                                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                >
                                    Username:
                                </label>
                                <div className="relative">
                                    <input
                                        id="username"
                                        type="username"
                                        name="username"
                                        className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="Username"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label
                                    htmlFor="password"
                                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                >
                                    Password:
                                </label>
                                <div className="relative">
                        
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div className="flex w-full">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                                >
                                    <span className="mr-2 uppercase">Login</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
