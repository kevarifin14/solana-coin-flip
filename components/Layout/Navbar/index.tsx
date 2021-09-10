import Link from 'next/link';

import LogoImage from 'components/LogoImage';
import WalletButton from 'components/WalletButton';

import NavLink from './NavLink';
import NavMobileMenu from './NavMobileMenu';

export default function Navbar() {
  const links = [];

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-2 w-full bg-light">
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

            <WalletButton />

          </div>

          <NavMobileMenu links={links} />

        </div>
      </div>
    </>
  );
}
