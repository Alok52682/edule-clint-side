import React from 'react';
import { FaFileDownload, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    const { about, curriculum, description, heading, instructor, instructor_avater, price, id } = course;



    return (
        <div className='m-10'>

            <h1 className='text-4xl font-bold mb-5'>{heading}</h1>
            <div className='border border-info p-5 rounded-xl flex justify-around items-center bg-blue-100'>
                <div>
                    <h2 className='text-xl font-semibold'>Instractor</h2>
                    <img src={instructor_avater} className='w-24' alt="Instractor" />
                    <p>{instructor}</p>
                </div>
                <div>
                    <p>Price : ${price}</p>
                    <Link to={`/courses/${id}/purchase`} className='btn btn-info text-white hover:bg-blue-400'>Purchase Course</Link>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <small className=' text-lg'>{about?.point}</small>
                    </div>
                    <p>Get the course : {about?.people} people</p>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className="btn btn-info text-white hover:bg-blue-400">Download Curriculum PDF <FaFileDownload /></button>}
                    </Pdf>
                </div>
            </div>
            <h2 className='text-3xl font-bold mt-5'>Course Curriculum </h2>
            <div ref={ref} className='border border-info p-5 rounded-xl text-justify'>
                <p>{curriculum}</p>
            </div>
            <h2 className='text-3xl font-bold mt-5'>About The Course</h2>
            <div className='border border-info p-5 rounded-xl text-justify'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CourseDetails;