import React from 'react';
import { FaInbox, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaSkype } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-blue-200 p-5'>
            <div className="grid lg:grid-cols-4 w-9/12 mx-auto">
                <div className='text-xl'>
                    <div to='/' className="font-extrabold normal-case text-5xl flex items-center">
                        <img src='https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png' className='w-20 rounded-full' alt='Profile' />Edu<span className='text-blue-500'>Le</span>
                    </div>
                    <h2 className='text-3xl'>Caribbean Ct.</h2>
                    <h4 className='text-blue-500 mb-5'>Haymarket, Virginia (VA).</h4>
                    <h4><FaInbox className='inline mr-2 text-blue-500' /><span>edule@gmail.com</span></h4>
                    <h4 className='mb-5'><FaPhone className='inline mr-2 text-blue-500' /><span>(970) 262-1413</span></h4>

                    <div className='flex mt-5'>
                        <FaFacebookF className='m-2' />
                        <FaInstagram className='m-2' />
                        <FaTwitter className='m-2' />
                        <FaSkype className='m-2' />
                    </div>
                </div>
                <div className='text-xl' style={{ lineHeight: '40px' }}>
                    <h2 className='text-2xl text-blue-500 font-bold mb-5'>Category</h2>
                    <h4>Creative Writing</h4>
                    <h4>Film & Video</h4>
                    <h4>Graphic Design</h4>
                    <h4>UI/UX Design</h4>
                </div>
                <div className='text-xl' style={{ lineHeight: '40px' }}>
                    <h2 className='text-2xl text-blue-500 font-bold mb-5'>Quick Links</h2>
                    <h4>Privacy Policy</h4>
                    <h4>Discussion</h4>
                    <h4>Terms & Conditions</h4>
                    <h4>Student Support</h4>
                </div>
                <div>
                    <h2 className='text-2xl text-blue-500 font-bold mb-5'>Subscribe</h2>
                    <p className='text-justify'>"Edule, the country's largest online education platform, has received foreign investment of Rs. 17 crores. The company has received institutional investment for the first time. India's Sequoia Capital has invested Rs. "</p>
                    <input type="email" placeholder="Drop Your email" className="input input-bordered input-info w-full max-w-xs my-2" />
                    <button className="btn btn-info">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;