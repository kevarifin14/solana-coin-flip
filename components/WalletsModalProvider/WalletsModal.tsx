import { useWallet } from '@solana/wallet-adapter-react';
import { Wallet } from '@solana/wallet-adapter-wallets';
import { useEffect } from 'react';

import Modal, { ModalProps } from 'components/Modal';

import useWalletsModalContext from './useWalletsModalContext';
import WalletsMenu from './WalletsMenu';

export default function WalletsModal(props: ModalProps) {
  const {
    select, connect, wallet, adapter,
  } = useWallet();
  const { setOpen } = useWalletsModalContext();

  useEffect(() => {
    if (wallet) {
      connect();
    }
  }, [wallet]);

  const handleConnectWallet = async (selectedWallet: Wallet) => {
    try {
      await select(selectedWallet.name);
    } catch (e) {
      alert('fail');
    }
    setOpen(false);
  };

  return (
    <Modal {...props}>
      <WalletsMenu onClick={handleConnectWallet} />
    </Modal>
  );
}
