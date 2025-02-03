import RaotoryLogoAndNameBlue from '../../assets/raotory-logo-name-blue.svg';

export default function ForgotPassword() {
    return (
      <>
        <div className="flex flex-col w-full max-w-[536px] mx-auto p-10.5 border border-black-10-percent rounded-3xl">
            
            {/* Heading */}
            <div className="mb-13">
                <h2 className="text-[2rem] font-semibold">
                    Forgot Password
                </h2>
                <p className="text-gray-600">
                    Please enter the email address associated with your account.
                </p>
            </div>
  
            {/* Form */}
            <div className="w-full">
                <form action="#" method="POST" className="space-y-52">
                    {/* Email */}
                    <div>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            class="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-5 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575 dark:text-white" 
                            placeholder="Email address" 
                            required 
                        />
                    </div>

                    {/* Button */}
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="flex w-full justify-center bg-gray-d9d9d9 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-[10px] text-base p-5 text-center me-2"
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </>
    )
  }