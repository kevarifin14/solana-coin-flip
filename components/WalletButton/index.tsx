import { useWallet } from '@solana/wallet-adapter-react';

import Button from 'components/Button';
import useWalletsModalContext from 'components/WalletsModalProvider/useWalletsModalContext';

import WalletDropdown from './WalletDropdown';

export default function WalletConnectButton() {
  const { wallet, connected } = useWallet();
  const { setOpen } = useWalletsModalContext();

  return (
    wallet && connected
      ? <WalletDropdown />
      : (
        <Button type="primary" onClick={() => setOpen(true)}>
          Connect wallet
        </Button>
      )

  );
}
