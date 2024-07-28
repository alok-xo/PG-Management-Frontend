import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrHide, GrView } from "react-icons/gr";
import "../../styles/login.css"


export const UserLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
            <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
                <div
                    className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                    style={{
                        backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <Link to="/"><i class="ri-arrow-left-circle-line"></i> home</Link>

                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ">
                            Email Address
                        </label>
                        <input
                            className="bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-gray-400 focus:bg-white rounded-lg py-3 px-5 block w-full focus:outline-2"
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-between">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                        </div>
                        <input
                            className="focus:outline-none focus:border-gray-400 focus:bg-white text-gray-700 bg-gray-100 border border-gray-300 rounded-lg py-3 px-5 block w-full focus:outline-2"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                        />
                        <div className="relative">
                            <div onClick={togglePasswordVisibility} className="icon">
                                {showPassword ? <GrHide /> : <GrView />}
                            </div>
                        </div>

                        {/* <a
                            href="#"
                            className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
                        >
                            Forget Password?
                        </a> */}
                    </div>
                    <div className="mt-8">
                        <button className="bg-[#1E3A8A] text-white font-bold py-4 px-4 w-full rounded-lg hover:bg-indigo-700">
                            <i class="ri-login-box-line"></i>&nbsp; Sign In
                        </button>

                    </div>
                    <div className="mt-4 flex items-center w-full text-center">
                        <Link
                            to="/userRegistration"
                            className="text-xs text-gray-500 capitalize text-center w-full"
                        >
                            Don&apos;t have any account yet?
                            <span className="text-blue-900 font-semibold"> Sign Up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

};