import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { getPhantomWallet, getSolletWallet } from '@solana/wallet-adapter-wallets';
import { FC, useMemo } from 'react';

const WalletConnectionProvider: FC = ({ children }) => {
  const wallets = useMemo(() => [
    getPhantomWallet(),
    getSolletWallet(),
  ], []);

  return (
    <ConnectionProvider endpoint="http://localhost:8899">
      <WalletProvider wallets={wallets}>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnectionProvider;
