import React, { useContext } from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { ThemeContext } from '../../Contexts/ThemeProvider';

const Courses = () => {
    // this component shows all course cards
    const courses = useLoaderData();
    const { light } = useContext(ThemeContext);
    return (
        <div className={`lg:grid grid-cols-4 ${light ? undefined : "bg-slate-700 text-white"}`}>
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
                                    "nav-link my-2 border rounded p-5 hover:border-blue-400" + (isActive ? " text-white bg-blue-400" : ` ${light ? " text-black" : " text-blue-200"}`)
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