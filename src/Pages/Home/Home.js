import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// this is the home component where write something about this website and set a courses button 
const Home = () => {
    return (
        <div className="bg-[url('https://5thforcesupport.com/wp-content/uploads/2022/01/GettyImages-643950510-scaled.jpg')] grid place-content-center">
            <div className='text-center p-5 m-10'>
                <h2 className='lg:text-6xl font-bold text-blue-500'>Edule</h2>
                <h3 className='text-4xl my-5 font-semibold'>E-Learning Website</h3>
                <p className='text-2xl my-5'>Let the journey of organizing your own learning begin</p>
                <p>Go to the Courses of your choice to study any topic of any subject</p>
                <Link to='/courses' className="btn btn-info hover:bg-blue-400 hover:text-white mt-5">Courses <FaArrowRight /> </Link>
            </div>
        </div>
    );
};

export default Home;