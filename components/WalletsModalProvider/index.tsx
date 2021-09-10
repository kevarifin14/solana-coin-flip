import { createContext, ReactNode, useState } from 'react';

import WalletsModal from './WalletsModal';

type WalletsModalContextProps = {
  open: boolean,
  setOpen: (open: boolean) => void,
}

type WalletsModalProviderProps = {
  children: ReactNode,
}

export const WalletsModalContext = createContext<WalletsModalContextProps>(null);

export default function WalletsModalProvider({ children }: WalletsModalProviderProps) {
  const [open, setOpen] = useState(false);

  return (
    <WalletsModalContext.Provider value={{ open, setOpen }}>
      {children}
      <WalletsModal open={open} onClose={() => setOpen(false)} />
    </WalletsModalContext.Provider>
  );
}
