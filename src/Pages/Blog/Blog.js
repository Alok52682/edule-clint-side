import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <h1 className='text-5xl font-bold text-error my-10'>#Question 1</h1>
                <div className="card card-compact bg-violet-100 shadow-xl">
                    <figure><img src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/07/express-logo.png" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">What is cors?</h2>
                        <p>Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.</p>

                        <p>In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.</p>

                        <p>An API is a set procedure for two programs to communicate. This means that API resources are consumed by other clients and servers.The client and the server have the same origin. In this example, accessing resources will be successful. You’re trying to access resources on your server, and the same server handles the request.The client and server have a different origin from each other, i.e., accessing resources from a different server. In this case, trying to make a request to a resource on the other server will fail.This is a security concern for the browser. CORS comes into play to disable this mechanism and allow access to these resources. CORS will add a response header access-control-allow-origins and specify which origins are permitted. CORS ensures that we are sending the right headers.Therefore, a public server handling a public API will add a CORS related header to the response. The browser on the client machine will look at this header and decide whether it is safe to deliver that response to the client or not.</p>

                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto'>
                <h1 className='text-5xl font-bold text-error my-10'>#Question 2</h1>
                <div className="card card-compact bg-violet-100 shadow-xl">
                    <figure><img src="https://blog.back4app.com/wp-content/uploads/2018/01/Firebase-Alternatives-1.jpg" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
                        <p>There is some option to implement authentication write down below.Some are relatively new companies but still provide valuable services to developers. The tutorial will cover competitors like Back4App, Parse, Backendless, Kinvey, Appwrite, Nhost, etc.</p>
                        <p>Parse is a mobile and web application development platform acquired by Facebook in 2013. The project was open-sourced in 2016 and has enjoyed the support of a robust developer ecosystem since then.</p>
                        <p>Back4app is an open-source, relational, low-code backend platform. It provides a fully managed backend featuring automated provisioning and scaling of applications, backup and recovery, 24/7 monitoring and alerting, web-based management tools, technical support, and much more.</p>

                        <p>Kuzzle is a ready-to-use, on-premises backend platform designed to power and unify innovative applications for web, mobile, and IoT.</p>


                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto'>
                <h1 className='text-5xl font-bold text-error my-10'>#Question 3</h1>
                <div className="card card-compact bg-violet-100 shadow-xl">
                    <figure><img src="https://i.ytimg.com/vi/0x8Dap2EIVE/maxresdefault.jpg" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">How does the private route work?</h2>
                        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>

                        <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>

                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto mb-5'>
                <h1 className='text-5xl font-bold text-error my-10'>#Question 4</h1>
                <div className="card card-compact bg-violet-100 shadow-xl">
                    <figure><img src="https://cdn.educba.com/academy/wp-content/uploads/2019/06/How-Node.JS-Works.jpg" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">What is Node? How does Node work?</h2>
                        <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>

                        <p>Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;