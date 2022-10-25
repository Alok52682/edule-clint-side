import React from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='lg:grid grid-cols-4'>
            <div className='text-center p-5 h-full' >
                <div className="btn-group btn-group-vertical">
                    <NavLink
                        to='/courses'
                        className='btn btn-info text-2xl text-white'
                    >All Courses</NavLink>
                    {
                        courses.map(course =>
                            <NavLink
                                key={course.id}
                                to={`/courses/${course.id}`}
                                className={({ isActive }) =>
                                    "nav-link my-2 border rounded p-5 hover:border-blue-400" + (isActive ? " text-white bg-blue-400" : " text-black")
                                }
                            >{course.heading}</NavLink>
                        )
                    }
                </div>
            </div>
            <div className='col-span-3'>
                <Outlet />
            </div>
        </div>
    );
};

export default Courses;