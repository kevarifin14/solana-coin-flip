import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from 'components/Button';
import LogoImage from 'components/LogoImage';

import NavButton from './NavButton';
import NavIconLink from './NavIconLink';

export default function NavMobileMenu({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>

      <div className="md:hidden">
        <NavButton onClick={() => setIsOpen(true)}>
          <MenuIcon className="h-6 w-6" />
        </NavButton>
      </div>

      <Transition
        show={isOpen}
        className="absolute z-30 top-0 inset-x-0 transition transform origin-top-right md:hidden"
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="rounded-lg shadow-lg bg-light divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5 sm:pb-8">
            <div className="flex items-center justify-between">

              <div className="h-8 w-8 relative">
                <LogoImage />
              </div>

              <div className="-mr-2">
                <NavButton onClick={() => setIsOpen(false)}>
                  <XIcon className="h-6 w-6" />
                </NavButton>
              </div>

            </div>

            <div className="mt-6 sm:mt-8">
              <nav className="space-y-2">

                {links.map((props) => <NavIconLink key={props.title} {...props} />)}

                <Button type="primary" block onClick={() => router.push('/signin')}>
                  Sign Up
                </Button>

              </nav>
            </div>

          </div>
        </div>
      </Transition>
    </>
  );
}
