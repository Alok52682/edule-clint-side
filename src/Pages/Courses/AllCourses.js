import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const AllCourses = () => {

    const courses = useLoaderData();
    return (
        <div className='lg:grid grid-cols-3 gap-5 w-11/12 lg:w-full mx-auto my-5'>
            {
                courses.map(course => <CourseCard key={course.id} course={course} />)
            }
        </div>
    );
};

export default AllCourses;