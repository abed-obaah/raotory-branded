export default function SingleStoreStep1({ setStep }) {
    return (
        <div className="flex flex-col w-full max-w-[536px] mx-auto mt-10">
            
            {/* Heading */}
            <div className="mb-7 text-center">
                <h2 className="text-2xl font-semibold mb-2">
                    Single store
                </h2>
                <p className="text-gray-600 text-base max-w-[468px] mx-auto">
                    This gives you the ability to set up your store and inventory appropriately
                </p>
            </div>
  
            {/* Form */}
            <div className="w-full border border-black-10-percent rounded-3xl p-10.5">
                <form action="#" method="POST" className="space-y-6">
                    {/* Business name */}
                    <div>
                        <input 
                            type="text" 
                            name="business-name" 
                            id="business-name" 
                            class="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575 dark:text-white" 
                            placeholder="Business name" 
                            required 
                        />
                    </div>
                    {/* Location */}
                    <div>
                        <input 
                            type="text" 
                            name="location" 
                            id="location" 
                            class="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575 dark:text-white" 
                            placeholder="Location" 
                            required 
                        />
                    </div>
                    {/* Phone number */}
                    <div>
                        <input 
                            type="tel" 
                            name="phone-number" 
                            id="phone-number" 
                            class="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575 dark:text-white" 
                            placeholder="Phone number" 
                            required 
                        />
                    </div>
                    {/* Terms and conditions */}
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-black-10-percent rounded bg-white focus:outline-none focus:ring-3 focus:ring-blue-300 dark:bg-white dark:border-black-10-percent" required />
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="terms" class="font-normal text-blue-001b2a dark:text-blue-001b2a">Agree to create store on raotory</label>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="mb-4 mt-20">
                        <button
                            onClick={() => setStep((prev) => prev + 1)}
                            className="flex w-full justify-center bg-gray-d9d9d9 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-[10px] text-base p-4 text-center me-2"
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}