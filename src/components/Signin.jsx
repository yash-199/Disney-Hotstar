import React, { useState } from 'react';
import sigin from "../Image/login-background.jpg";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase/setup';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
    const backgroundStyle = {
        backgroundImage: `url(${sigin})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const navigate = useNavigate();

    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");

    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
            setUser(confirmation);

        } catch (err) {
            console.error(err);
        }
    }

    const verfiyOtp = async () => {
        try {
            await user.confirm(otp);
            auth.currentUser && toast.success("SignedIn Successfully")
            navigate("/")
        } catch (err) {
            console.error(err)
        }
    }


    return (

        <div className='grid grid-cols-2 h-screen bg-black'>
            <div style={backgroundStyle}></div>

            <div className='ml-52'>
                <h1 className="mt-24 text xl font-semibold text-white ml-10">Login or sign up to continue</h1>
                <PhoneInput className='mt-10'
                    country={'us'}
                    value={phone}
                    onChange={phone => setPhone("+" + phone)}
                    inputStyle={{ backgroundColor: "black", color: "white" }}
                    placeholder='Enter mobile Number'
                />
                <p className='text-gray-500 text-xs mt-3'>By proceeding you confirm that you are above 18 years of <br /> age and agree to the
                    Privacy Policy Terms of Use.</p>
                {phone && <button onClick={sendOtp} className="mt-10 h-12 bg-blue-700 w-72 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded">
                    Send OTP
                </button>}
                <div id="recaptcha" className='mt-2'>

                </div>
                {phone && <input onChange={(e) => setOtp(e.target.value)}
                    type="text" className="w-72 ml-2 mt-20 bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter OTP" required />}
                {otp && <button onClick={verfiyOtp} className="mt-10 h-12 bg-blue-700 w-72 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded">
                    Verfiy OTP
                </button>}
                {otp && <h3 className='mt-20 text-gray-500 ml-5'>Enter code, number and <span className='text-blue-500'>Click send OTP</span></h3>}
            </div>
        </div >
    );
}

export default Signin;
