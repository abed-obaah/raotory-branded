import RaotoryLogoAndNameBlue from '../../assets/raotory-logo-name-blue.svg';

export default function Login() {
    return (
        <section className='section-px'>
            <div className="flex flex-col w-full max-w-[536px] mx-auto p-10.5 border border-black-10-percent rounded-3xl mt-10">
                
                {/* Heading */}
                <div className="mb-7">
                    <h2 className="text-[2rem] font-semibold">
                        Login
                    </h2>
                    <p className="text-gray-600">
                        Please enter your login credentials details correctly.
                    </p>
                </div>
    
                {/* Form */}
                <div className="w-full">
                    <form action="#" method="POST" className="space-y-6">
                        {/* Email */}
                        <div>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                class="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575 dark:text-white" 
                                placeholder="Email address" 
                                required 
                            />
                        </div>
                        {/* Password */}
                        <div>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                class="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575 dark:text-white" 
                                placeholder="Password" 
                                required 
                            />
                            {/* Forgot password */}
                            <div class="mt-3">
                                <a href="#" class="font-medium text-blue-001b2a hover:text-blue-29a8f1">Forgot password?</a>
                            </div>
                        </div>
                        {/* Button */}
                        <div className="mb-4 mt-14.5">
                            <button
                                type="submit"
                                className="flex w-full justify-center bg-gray-d9d9d9 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-[10px] text-base p-4 text-center me-2"
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                    {/* Log in option */}
                    <p className="text-center text-base text-gray-303a4d font-semibold">
                        Don’t have an account?{' '}
                        <a href="/account/register" className="font-semibold text-blue-29a8f1 hover:text-blue-0e90da">
                            Register
                        </a>
                    </p>
                </div>

                {/* Company logo */}
                <div className="mt-8.5">
                    <img
                        alt="Raotori logo"
                        src={RaotoryLogoAndNameBlue}
                        className="mx-auto h-7.5 w-auto"
                    />
                </div>

            </div>
        </section>
    )
  }
  