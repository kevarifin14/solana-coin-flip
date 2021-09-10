import { Menu } from '@headlessui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Wallet } from '@solana/wallet-adapter-wallets';

import WalletMenuItem from './WalletMenuItem';

type WalletMenuProps = {
  onClick: (wallet: Wallet) => void,
}

export default function WalletsMenu({ onClick }: WalletMenuProps) {
  const { wallets } = useWallet();

  return (
    <Menu>
      {wallets.map((wallet) => <WalletMenuItem wallet={wallet} onClick={onClick} />)}
    </Menu>
  );
}
