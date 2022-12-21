import React from 'react';
import { FaJournalWhills } from 'react-icons/fa';

const ItClassSection = () => {
    return (
        <div className='w-10/12 mx-auto text-center my-10'>
            <h2 className='text-xl text-info flex justify-center items-center gap-2'><FaJournalWhills /> IT Related Class</h2>
            <h1 className='text-2xl md:text-5xl font-bold leading-tight mt-5'>What is in the online batch throughout <br /> the year?</h1>
            <p className='md:text-xl mt-3'>May the progress of education continue from any part of the country under the care of the best teachers</p>


            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='md:w-1/2'>
                    <img src="https://i.ibb.co/tHV4R3K/img.webp" className="" alt='' />
                </div>
                <div className='md:w-1/2'>
                    <div className="card card-side bg-base-100 hover:border-info hover:bg-slate-200 border md:p-5 mt-3">
                        <div className='p-3'>
                            <img src="https://i.ibb.co/ngncNpg/1200px-Backpack-icon-svg.png" className='w-14' alt="Movie" />
                        </div>
                        <div className="card-body text-start text-slate-500 p-3">
                            <h2 className="md:text-xl font-semibold">Complete syllabus cover through live classes</h2>
                            <p className='text-xs md:text-lg'>One teacher will take the class, the second teacher will answer your various questions</p>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 hover:border-info hover:bg-slate-200 border md:p-5 mt-3 flex items-center">
                        <div className='p-3'>
                            <img src="https://i.ibb.co/vmWfQ1K/images-q-tbn-ANd9-Gc-Sx-x-VUasng-Zx-Wl-D2-OTb7-LJ3-YWm-Lroxiwp-A-usqp-CAU.png" className='w-14' alt="Movie" />
                        </div>
                        <div className="card-body text-start text-slate-500">
                            <h2 className="md:text-xl font-semibold">Lecture sheets and recorded classes</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 hover:border-info hover:bg-slate-200 border md:p-5 mt-3 flex items-center">
                        <div className='p-3'>
                            <img src="https://i.ibb.co/BgPdjjv/document-edit-flat.png" className='w-14' alt="Movie" />
                        </div>
                        <div className="card-body text-start text-slate-500">
                            <h2 className="md:text-xl font-semibold">Regular homework and tests</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItClassSection;