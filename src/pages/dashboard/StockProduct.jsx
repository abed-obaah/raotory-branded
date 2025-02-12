import { ChevronRightIcon } from '@heroicons/react/20/solid'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
  { name: 'Project Ben', href: '#', current: true },
]

export default function StockProduct() {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex items-center space-x-4">
        {pages.map((page, index) => (
          <li key={page.name} className="flex items-center">
            {index > 0 && (
              <ChevronRightIcon
                aria-hidden="true"
                className="size-5 shrink-0 text-gray-400"
              />
            )}
            <a
              href={page.href}
              aria-current={page.current ? 'page' : undefined}
              className={`text-sm font-medium text-gray-500 hover:text-gray-700 ${
                index > 0 ? 'ml-4' : ''
              }`}
            >
              {page.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
