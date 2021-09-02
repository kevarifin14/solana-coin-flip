import { ReactNode } from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode,
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {children}
      </div>

      <Footer />
    </main>
  );
}

export const getLayout = (page) => <Layout>{page}</Layout>;
