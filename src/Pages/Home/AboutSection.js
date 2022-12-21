import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <div className='text-center my-10 w-10/12 mx-auto'>
            <h2 className='text-2xl md:text-5xl font-bold leading-tight'>Let the journey of organizing <br /> your own learning begin</h2>
            <p className='md:text-xl mt-3'>Go to the section of your choice to learn anything on any subject</p>
            <div className='md:grid grid-cols-2 gap-5 mt-6'>
                <div className="card card-side bg-base-100 border md:p-5 mt-5">
                    <div className='flex justify-center items-center p-3'>
                        <img src="https://i.ibb.co/ngncNpg/1200px-Backpack-icon-svg.png" className='w-20' alt="Movie" />
                    </div>
                    <div className="card-body text-start relative text-slate-500">
                        <h2 className="md:text-2xl font-semibold">It Related Classes</h2>
                        <p>Free live class, Free videos</p>
                        <button className='absolute right-3 top-14'><FaAngleRight /></button>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border md:p-5 mt-5">
                    <div className='flex justify-center items-center p-3'>
                        <img src="https://i.ibb.co/mvtSJ0V/png-transparent-graphic-design-icon-rocket-rocket-launch-spacecraft-icon-design-symbol-retrorocket-f.png" className='w-20' alt="Movie" />
                    </div>
                    <div className="card-body text-start relative text-slate-500">
                        <h2 className="md:text-2xl font-semibold">Skills</h2>
                        <p>English, Freelanchin,Skills and IIT</p>
                        <button className='absolute right-3 top-14'><FaAngleRight /></button>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border md:p-5 mt-5">
                    <div className='flex justify-center items-center p-3'>
                        <img src="https://i.ibb.co/9YkxLz8/332-3320668-graduation-cap-icon-png.jpg" className='w-20 h-20' alt="Movie" />
                    </div>
                    <div className="card-body text-start relative text-slate-500">
                        <h2 className="md:text-2xl font-semibold">Addmission Test</h2>
                        <p>University, Medical</p>
                        <button className='absolute right-3 top-14'><FaAngleRight /></button>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border md:p-5 mt-5">
                    <div className='flex justify-center items-center p-3'>
                        <img src="https://i.ibb.co/hgMvn8Q/aaaaaaa.png" className='w-20' alt="Movie" />
                    </div>
                    <div className="card-body text-start relative text-slate-500">
                        <h2 className="md:text-2xl font-semibold">Job Preparation</h2>
                        <p>BCS,Bank Jobs and Govt jobs</p>
                        <button className='absolute right-3 top-14'><FaAngleRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;