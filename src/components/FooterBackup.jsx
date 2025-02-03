import RaotoryLogoAndNameWhite from '../assets/raotory-logo-name-white.svg';

const navigation = {
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'Pricing', href: '/#pricing' },
      { name: 'About us', href: '/about' },
      { name: 'Contact us', href: '/contact' },
    ],
    // Rest of code here
  }
  
  export default function Footer() {
    return (
      <footer className="mt-24 bg-blue-0e90da">
        <div className="max-w-6xl mx-auto pt-16 pb-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <div>
                <a href="/">
                  <img
                    alt="Raotory logo"
                    src={RaotoryLogoAndNameWhite}
                    className="h-10"
                  />              
                </a>
              </div>
              <p className="hidden text-sm/6 text-balance text-gray-300">
                We empower businesses to achieve operational efficiency and growth by providing them with intelligent, easy-to-use inventory management solutions.
              </p>
              <div className="flex gap-x-3">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-blue-0e90da bg-white p-2.5 rounded-full hover:bg-gray-300">
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="size-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
              {/* Quick links */}
              <div>
                <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.quickLinks.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-white hover:text-gray-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Company */}
              <div>
                {/* Rest of code here */}
              </div>
              {/* Terms of service */}
              <div>
                  {/* Rest of code here */}
              </div>
            </div>
          </div>
          {/* Copyright information */}
          <div className="mt-8 border-t border-gray-d9d9d9 pt-8">
            <p className="text-sm/6 text-white">&copy; 2024 Raotory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
