import { useContext } from 'react';

import { WalletsModalContext } from '.';

export default function useWalletsModalContext() {
  return useContext(WalletsModalContext);
}
