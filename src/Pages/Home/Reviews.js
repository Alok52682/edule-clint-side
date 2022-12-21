import React from 'react';

const Reviews = () => {
    return (
        <div className='text-center w-10/12 mx-auto my-10'>
            <h2 className='text-2xl md:text-5xl font-bold leading-tight mt-5'>Why we are the first choice of <br /> students and parents?</h2>
            <div className='md:flex gap-5 justify-around items-center mt-7'>
                <div className='border p-5 rounded-xl text-start'>
                    <img src="https://i.ibb.co/HC5Pscv/7350737.png" className='w-10 mt-3' alt="" />
                    <p>Each section of the course had clear instructions. Especially, the “Reading” and “Writing” sections were so informative which made the Mock Test and Real Exam easy for me. I like the “Writing Part” the most.</p>

                    <p className='text-xl font-semibold mt-4'>Alex Mathue</p>
                    <p className='text-slate-500'>Teaching Assistant, ABC University</p>
                </div>
                <div className='border p-5 rounded-xl text-start my-5'>
                    <img src="https://i.ibb.co/HC5Pscv/7350737.png" className='w-10 mt-3' alt="" />
                    <p>There was no time to learn offline so opt for online courses. In the course, the font Tanveen Maad has been taught very beautifully. I was able to master Shuddha Tilawat very quickly by practicing every day very easily.</p>

                    <p className='text-xl font-semibold mt-4'>Alexis Mac</p>
                    <p className='text-slate-500'>Teaching Assistant, Urban University</p>
                </div>
                <div className='border p-5 rounded-xl text-start'>
                    <img src="https://i.ibb.co/HC5Pscv/7350737.png" className='w-10 mt-3' alt="" />
                    <p>I had an online page but could not understand anything about how to move forward with the page. By doing the course, I learned how to give a basic post, how to use it, how to contact.</p>

                    <p className='text-xl font-semibold mt-4'>Alok Rajbongshi</p>
                    <p className='text-slate-500'>Web Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;