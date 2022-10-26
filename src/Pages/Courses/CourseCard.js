import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { instructor, instructor_avater, about, course_banner, heading, price } = course;

    return (
        // this is card component this is from map ak each card has course short information
        <div className="card mb-5 md:mb-0 glass">
            <div className='h-2/4'>
                <img src={course_banner} className='h-full w-full' alt="Course Banner" />
            </div>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='flex items-center gap-1'>
                        <img src={instructor_avater} className='w-10' alt="" />
                        <small>{instructor}</small>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-warning' />
                        <small className=' text-lg'>{about.point}</small>
                    </div>
                </div>
                <h2 className="card-title">{heading}</h2>
                <div className="card-actions justify-between items-center">
                    <p>Price : ${price}</p>
                    <Link to={`/courses/${course.id}`} className="btn btn-info">More Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;