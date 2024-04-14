import React, { useState } from 'react'
import logo from '../Image/logo.svg';
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { SiThemoviedatabase } from "react-icons/si";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/setup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar({ setSearch, search, searchRef }) {
    const [touch, setTouch] = useState(false);
    const logout = async () => {
        try {
            await signOut(auth);
            !auth.currentUser && toast.success("Logged out Successfully")

        } catch (err) {
            console.error(err)
        }
    }
    return (

        <div className='z-20 fixed grid grid-cols-2 bg-black h-full w-24'>
            <div onMouseEnter={() => setTouch(true)} onMouseLeave={() => setTouch(false)}>
                <img src={logo} className='w-28 ml-5 mt-5' alt='logo' />
                <button class="bg-brown-500 hover:bg-brown-700 text-white py-2 px-4 mt-4 border-gray-400 rounded-full">
                    Subscribe
                </button>
                <Link to='/signin'><FaRegUserCircle style={{ color: "gray", fontSize: "1.6rem" }} className='ml-7 mt-20 cursor-pointer' /></Link>
                <FaSearch
                    onClick={() => {
                        setTimeout(() => {
                            // Call focus() with parentheses
                            searchRef.current.focus();
                        }, 0);
                        setSearch(!search);
                    }}
                    style={{ color: "gray", fontSize: "1.6rem" }}
                    className='ml-7 mt-10 cursor-pointer'
                />
                <IoMdHome style={{ color: "gray", fontSize: "1.6rem" }} className='ml-7 mt-10 cursor-pointer' />
                <PiTelevisionSimpleBold style={{ color: "gray", fontSize: "1.6rem" }} className='ml-7 mt-10 cursor-pointer' />
                <SiThemoviedatabase style={{ color: "gray", fontSize: "1.6rem" }} className='ml-7 mt-10 cursor-pointer' />
                <MdOutlineSportsBaseball style={{ color: "gray", fontSize: "1.6rem" }} className='ml-7 mt-10 cursor-pointer' />
                <RiDashboardLine style={{ color: "gray", fontSize: "1.6rem" }} className='ml-7 mt-10 cursor-pointer' />
                {auth.currentUser && <MdLogout
                    style={{ color: "gray", fontSize: "1.6rem" }} onClick={logout}
                    className='ml-7 mt-10 cursor-pointer' />}
            </div>
            {touch && <Fade><div className='bg-opacity-60 ml-8 w-24 bg-black h-screen font-bold text-base text-slate-300'>
                <h4 className='pt-48'>My Space</h4>
                <h4 className='mt-11'>Search</h4>
                <h4 className='mt-11'>Home</h4>
                <h4 className='mt-10'>TV</h4>
                <h4 className='mt-10'>Movie</h4>
                <h4 className='mt-10'>Sports</h4>
                <h4 className='mt-10'>Categories</h4>
                {auth.currentUser && <h4 className='mt-11'>Logout</h4>}
            </div>
            </Fade>
            }
        </div>
    )
}

export default Navbar