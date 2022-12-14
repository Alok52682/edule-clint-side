import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeProvider';

const Faq = () => {
    // most asked question showed in this component
    const { light } = useContext(ThemeContext);
    return (
        <div className={`${light ? undefined : "bg-slate-700 text-white"}`}>
            <h2 className='text-4xl font-bold text-blue-500 text-center mt-20 mb-10'>Frequently Asked Questions</h2>
            <div className={`collapse collapse-arrow border border-slate-300 rounded-box ${light ? "bg-cyan-100" : "bg-cyan-700"}`}>
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-bold">
                    How do I purchase the course?
                </div>
                <div className="collapse-content">
                    <p>Click on 'Start Course' button.
                        Click on the 'Continue' button with your phone number or email.
                        You can find out more about the usage of your phone number or email by clicking on the 'question mark' icon.
                        After entering your mobile number/email and password, click on the 'Continue' button.
                        Choose your preferred payment method and click on the 'Buy Course' button.
                        You will be taken to payment section where you can make payment using various payment methods.
                        If you pay using Bikash, you can save the Bikash number for future payments.
                        After payment your purchased course will appear in 'Your Courses' section in your account.</p>

                </div>
            </div>

            {/* Question number-2 */}
            <div className={`collapse collapse-arrow border border-slate-300 rounded-box ${light ? "bg-cyan-100" : "bg-cyan-700"}`}>
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-bold">
                    How long will the duration of the course be?
                </div>
                <div className="collapse-content">
                    <div className="overflow-x-auto">

                        <p>Ten Minute School courses have duration of 6 months and 12 months depending on the course. Once the course expires you can extend it for 30 days.</p>

                    </div>
                </div>
            </div>
            <div className={`collapse collapse-arrow border border-slate-300 rounded-box ${light ? "bg-cyan-100" : "bg-cyan-700"}`}>
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-bold">
                    How can I get a refund after purchasing the course?
                </div>
                <div className="collapse-content">
                    <div className="overflow-x-auto">

                        <p>Apply for a refund by calling 01XXXXXX within 72 hours of purchasing the course
                            Refunds will be made within 7 to 14 working days based on the reason for the refund
                            After purchasing the course, if you don't like the course or don't like the materials there are no refunds.</p>

                    </div>
                </div>
            </div>

            {/* Question number-3 */}
            <div className={`collapse collapse-arrow border border-slate-300 rounded-box ${light ? "bg-cyan-100" : "bg-cyan-700"}`}>
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-bold">
                    Will the certificate expire?
                </div>
                <div className="collapse-content">
                    <p>Your certificate never expires, you can use the certificate whenever you want at your convenience.</p>
                </div>
            </div>
            <div className={`collapse collapse-arrow border border-slate-300 rounded-box ${light ? "bg-cyan-100" : "bg-cyan-700"}`}>
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-bold">
                    How do I start the course after purchase?
                </div>
                <div className="collapse-content">
                    <p>After payment click on 'Start Course' button and you will be taken directly to the course.
                        Next click on 'My Courses' option from your profile section.
                        You will find all the courses you have enrolled here, in which case you must login.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;