import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ThemeContext } from '../../Contexts/ThemeProvider';

const Purchase = () => {
    // this is tha private route which is depends on user loged in or not
    const { light } = useContext(ThemeContext);
    const course = useLoaderData();
    const { course_banner, heading, price } = course;
    return (
        <div className='lg:flex items-center justify-center gap-5 lg:mt-52 w-11/12 mx-auto'>
            <div className={`"card ${light ? "bg-base-100" : "bg-base-900"} border shadow-xl mb-5 "`}>
                <div className="card-body">
                    <div>
                        <h2 className='text-2xl font-bold mb-5'>Proceed with mobile number/email to complete the payment</h2>
                        <input type="text" placeholder="Phone/Email" className="input input-bordered input-info w-full mb-3" />
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-info w-full">Proceed</button>
                    </div>

                </div>
            </div>
            <div className={`card w-full border shadow-xl mb-5 ${light ? "bg-base-100" : "bg-base-900"} `}>
                <div className="card-body">
                    <div className='flex items-center justify-between border-b-2 border-blue-300 p-3'>
                        <h2 className='text-lg font-bold'>{heading}</h2>
                        <img src={course_banner} className='w-32 shadow-2xl border-4 border-blue-400' alt="" />
                    </div>
                    <div className="font-bold text-blue-600">
                        <p>Price : ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;