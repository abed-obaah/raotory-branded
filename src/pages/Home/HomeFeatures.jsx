import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import ButtonRoundedSolid from '../../components/ButtonRoundedSolid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function HomeFeatures() {
  return (
    <section className="max-w-6xl mx-auto pt-24">
        <div className="flex">
            {/* Left side */}
            <div className="flex flex-col flex-1">
                <h2 className="text-base/7 font-semibold text-gray-600">
                    Features
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Why manage your inventory with Raotory?
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                    We empower businesses to achieve operational efficiency and growth by providing them with intelligent, easy-to-use inventory management solutions.
                </p>
                {/* Button */}
                <div className='flex'>
                    <ButtonRoundedSolid text="Get Started" href="#" />
                </div>
            </div>

            {/* Right side */}
            <div className='flex-1 bg-amber-200'>

            </div>
        </div>
    </section>
  )
}