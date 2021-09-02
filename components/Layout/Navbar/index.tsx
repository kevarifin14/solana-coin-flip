import { BookOpenIcon, UserIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from 'components/Button';
import LogoImage from 'components/LogoImage';

import NavLink from './NavLink';
import NavMobileMenu from './NavMobileMenu';

export default function Navbar() {
  const router = useRouter();

  const links = [
    {
      href: '/docs',
      icon: BookOpenIcon,
      title: 'Documentation',
    },
    {
      href: '/signin',
      icon: UserIcon,
      title: 'Sign In',
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-2 w-full bg-light z-50">
      <div className="mx-auto max-w-7xl relative flex items-center justify-between h-16">

        <Link href="/">
          <a>
            <LogoImage className="h-8 sm:h-10" />
          </a>
        </Link>

        <div className="hidden md:block space-x-8">

          {links.map(({ title, href }) => (
            <NavLink href={href}>
              {title}
            </NavLink>
          ))}

          <Button type="primary" onClick={() => router.push('/signin')}>
            Sign Up
          </Button>

        </div>

        <NavMobileMenu links={links} />

      </div>
    </div>
  );
}
