import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const LogIn = () => {

    const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => console.log(result.user))
            .catch((error) => console.log('error', error))
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => console.log(result.user))
            .catch((error) => console.log('error', error))
    }
    return (
        <div className='py-6'>
            <div className="flex bg-blue-100 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover">
                    <img src={`https://png.pngtree.com/background/20210709/original/pngtree-blackboard-education-light-bulb-green-picture-image_945855.jpg`} alt='Google' className='w-full' />
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-700 text-center">Edule</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <Link onClick={handleGoogleSignIn} className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-blue-50">
                        <div className="px-4 py-3">
                            <img src={`https://cdn-icons-png.flaticon.com/512/2991/2991148.png`} alt='Google' className='w-5' />
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                    </Link>
                    <Link onClick={handleGithubSignIn} className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-blue-50">
                        <div className="px-4 py-3">
                            <img src={`https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png`} alt='Github' className='w-5' />
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with GitHub</h1>
                    </Link>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <Link to='/' className="text-xs text-center text-gray-500 uppercase">or login with email</Link>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <form>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-blue-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" placeholder='Enter Email Address' required />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <Link to="/" className="text-xs text-gray-500">Forget Password?</Link>
                            </div>
                            <input className="bg-blue-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" placeholder='********' required />
                        </div>
                        <div className="mt-8">
                            <button type='submit' className="btn btn-info w-full">Log In</button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link to="/register" className="text-xs text-gray-500 uppercase">or sign up</Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;