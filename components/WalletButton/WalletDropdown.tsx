import { Menu, Transition } from '@headlessui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Fragment } from 'react';

import { confirm } from 'components/Modal';
import WalletMediaObject from 'components/WalletMediaObject';

export default function WalletDropdown() {
  const { wallet, publicKey, disconnect } = useWallet();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="bg-primary-600 px-4 py-2 rounded-md text-white w-48 text-left">
        <WalletMediaObject wallet={wallet} description={publicKey.toString()} />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              <WalletMediaObject size="sm" wallet={wallet} description={publicKey.toString()} className="p-2" />
            </Menu.Item>
          </div>

          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-primary-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full p-2 text-sm`}
                  onClick={() => confirm({
                    title: 'Are you sure you want to disconnect your wallet?',
                    okText: 'Disconnect',
                    onOk: () => disconnect(),
                  })}
                >
                  Disconnect
                </button>
              )}
            </Menu.Item>
          </div>

        </Menu.Items>
      </Transition>

    </Menu>
  );
}
