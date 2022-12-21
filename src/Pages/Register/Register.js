import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Register = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    // this state for show password suggession for genarate valied password
    const [showSuggession, setShowSuggession] = useState(false);
    const [passError, setPassError] = useState({
        oneUpperCase: "At least one upper case",
        oneDegit: "At least one digit",
        oneSepcial: "At least one special character",
        eightCharecters: "Please give atleast 8 charecter"
    })
    const [userPrifile, SetUserProfile] = useState({
        email: "",
        password: "",
        userName: "",
        photoUrl: ""
    })

    const handleSubmit = event => {
        event.preventDefault();
        const email = userPrifile.email;
        const password = userPrifile.password;
        const username = userPrifile.userName;
        const photo = userPrifile.photoUrl;

        createUser(email, password)
            .then(result => {
                updateUserProfile(username, photo)
                    .then(() => { })
                    .catch((error) => console.log('error', error))
                verifyEmail()
                    .then(() => toast.promise('Cheak email and varify your account.'))
                console.log(result.user);
                toast.success('Account has been Created');
                navigate(from, { replace: true });
            })
            .catch((error) => toast.error(error.message))
    }

    const handelOnChangeFullName = event => {
        let userName = event.target.value;
        SetUserProfile({ ...userPrifile, userName: userName });
        userName = "";
    }
    const handelOnChangePhotoUrl = event => {
        let photoURL = event.target.value;
        SetUserProfile({ ...userPrifile, photoUrl: photoURL });
        photoURL = "";
    }
    const handelOnChangeEmail = event => {
        let email = event.target.value;
        SetUserProfile({ ...userPrifile, email: email });
        email = "";
    }
    const handelOnChangePassword = event => {
        let password = event.target.value;
        setShowSuggession(true);
        // this is for password validation
        if (/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)) {
            setPassError({ oneUpperCase: " ", oneDegit: " ", oneSepcial: " ", eightCharecters: " " });
            setShowSuggession(false);
        }
        SetUserProfile({ ...userPrifile, password: password });
        password = "";
    }

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center p-5">
            <div className="bg-blue-100 text-gray-500 rounded-lg shadow-xl w-10/12 overflow-hidden">
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-blue-500 py-10 px-10 bg-cover">
                        <img src={`https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/edu/art/5b3c95847bf32.jpg`} alt='' className='h-full' />
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                            <p>Enter your information to register</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Full name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input onChange={handelOnChangeFullName} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Drop Your Name" value={userPrifile.userName} required />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Image Url</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input onChange={handelOnChangePhotoUrl} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Drop your Image Url" value={userPrifile.photoUrl} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Email Address</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input onChange={handelOnChangeEmail} type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Drop Your Email" value={userPrifile.email} required />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input onChange={handelOnChangePassword} type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" value={userPrifile.password} required />
                                    </div>
                                    <div className={showSuggession ? 'block' : 'hidden'}>
                                        <ul>
                                            <li><small>{passError.oneUpperCase}</small></li>
                                            <li><small>{passError.oneDegit}</small></li>
                                            <li><small>{passError.oneSepcial}</small></li>
                                            <li><small>{passError.eightCharecters}</small></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button type='Submit' className="btn btn-info w-full">Register</button>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="border-b w-1/5 md:w-1/4"></span>
                                <Link to="/login" className="text-xs text-gray-500 uppercase">or Sign In</Link>
                                <span className="border-b w-1/5 md:w-1/4"></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;