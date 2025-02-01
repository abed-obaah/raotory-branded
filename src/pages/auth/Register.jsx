export default function Register() {
    return (
      <>
        <div className="flex flex-col min-w-[536px] w-max mx-auto p-10.5 border border-black-10-percent rounded-3xl">
            
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
                            class="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-6 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575 dark:text-white" 
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
                            class="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-6 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575 dark:text-white" 
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
                            class="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-6 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575 dark:text-white" 
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
                            class="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-6 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575 dark:text-white" 
                            placeholder="Confirm password" 
                            required 
                        />
                    </div>
            

        
                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Sign in
                        </button>
                    </div>
                </form>
    
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                Not a member?{' '}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Start a 14 day free trial
                </a>
                </p>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="mx-auto h-10 w-auto"
                />
            </div>

        </div>
      </>
    )
  }
  