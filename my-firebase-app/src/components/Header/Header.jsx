import React, { useRef, useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import { auth, db } from "../../firebase"; // Your firebase config
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "", name: "" });

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
        // 1. Create User in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        // 2. Store extra details in Firestore
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name: formData.name,
            email: formData.email,
            createdAt: new Date(),
        });

        alert("User registered successfully!");
        setIsOpen(false); // Close modal on success
        } catch (error) {
        console.error("Error registering user:", error.message);
        }
    };
    return (
        <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="home"
                smooth={true}
                offset={-75} // Adjusts the scroll position with an offset (useful for fixed headers)
                duration={500} // Duration of the scroll animation in milliseconds
                class="flex items-center rtl:space-x-reverse cursor-default hover:cursor-pointer">
                <img src="./pasya.png" class="h-12" alt="pasya Logo"/>
                <img src="./titleh.png" class="h-12" alt="title"/>
            </Link>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <div className="flex justify-center">
                {/* Trigger Button */}
                <button 
                    onClick={() => setIsOpen(true)}
                    class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                    Sign Up Now
                </button>

                    {/* Modal Overlay */}
                    {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    {/* Form Card */}
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-in fade-in zoom-in duration-300">
                            <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                            >&times;</button>
                            
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h2>
                            
                            <form onSubmit={handleRegister} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input 
                                type="text" 
                                required
                                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input 
                                type="email" 
                                required
                                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input 
                                type="password" 
                                required
                                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-green-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mt-4 transition-colors"
                            >
                                Register
                            </button>
                            </form>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                    <Link to="home" 
                    smooth={true}
                    offset={-25} // Adjusts the scroll position with an offset (useful for fixed headers)
                    duration={500} // Duration of the scroll animation in milliseconds
                    class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-default hover:cursor-pointer">Home</Link>
                </li>
                <li>
                    <Link to="about"
                    smooth={true}
                    offset={-100} // Adjusts the scroll position with an offset (useful for fixed headers)
                    duration={500} // Duration of the scroll animation in milliseconds
                    class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-default hover:cursor-pointer">About us</Link>
                </li>
                <li>
                    <Link to="work_with_us"
                    smooth={true}
                    offset={-100}
                    duration={500}
                    class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-default hover:cursor-pointer">Work with us</Link>
                </li>
                <li>
                    <Link to="blog"
                    smooth={true}
                    offset={-100}
                    duration={500}
                    class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-default hover:cursor-pointer">Blog</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
    
}

export default Header