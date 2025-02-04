import RaotoryLogoAndNameBlue from '../../assets/raotory-logo-name-blue.svg';

export default function Register() {
    return (
      <section className='section-px'>
        <div className="flex flex-col w-full max-w-[536px] mx-auto p-10.5 border border-black-10-percent rounded-3xl mt-16">
            
            {/* Heading */}
            <div className="mb-7">
                <h2 className="text-[2rem] font-semibold">
                    Register
                </h2>
                <p className="text-gray-600">
                    Please enter your registration details correctly
                </p>
            </div>
  
            {/* Form */}
            <div className="w-full">
                <form action="#" method="POST" className="space-y-6">
                    {/* Name */}
                    <div>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            class="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575 dark:text-white" 
                            placeholder="Full name" 
                            required 
                        />
                    </div>
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
                    </div>
                    {/* Confirm password */}
                    <div>
                        <input 
                            type="password" 
                            name="confirm-password" 
                            id="confirm-password" 
                            class="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575 dark:text-white" 
                            placeholder="Confirm password" 
                            required 
                        />
                    </div>
                    {/* Terms and conditions */}
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-black-10-percent rounded bg-white focus:outline-none focus:ring-3 focus:ring-blue-300 dark:bg-white dark:border-black-10-percent" required />
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="terms" class="font-normal text-blue-001b2a dark:text-blue-001b2a">I accept the <a class="font-medium text-blue-001b2a hover:underline dark:text-blue-0e90da" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="mb-4 mt-10">
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
                    Already registered?{' '}
                    <a href="/account/login" className="font-semibold text-blue-29a8f1 hover:text-blue-0e90da">
                        Login
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
  