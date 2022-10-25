import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='flex'>
            <div className="overflow-x-auto border h-full">
                <div className='text-center p-5' >
                    <h2>Courses</h2>
                    <ol className='list-decimal'>
                        {
                            courses.map(course => <li
                                key={course.id}
                            >
                                <NavLink to={`/courses/${course.id}`}>{course.heading}</NavLink>
                            </li>)
                        }
                    </ol>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-5 w-9/12 mx-auto my-5'>
                {
                    courses.map(course => <CourseCard key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;