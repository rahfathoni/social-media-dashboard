'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  {
    name: 'List User',
    href: '/dashboard/list-user'
  }
]

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <header
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <div
            className='flex flex-row items-center leading-none text-white'
          >
            <p className="text-[28px]">Company's Social Platform</p>
          </div>
        </div>
      </header>
      <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600' : pathname === link.href,
                },
              )}
            >
              <p className="block">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  )
}