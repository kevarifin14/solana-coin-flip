import 'tailwindcss/tailwind.css'; // eslint-disable-line import/no-extraneous-dependencies
import { DefaultSeo } from 'next-seo';
import dynamic from 'next/dynamic';

import WalletsModalProvider from 'components/WalletsModalProvider';

const WalletConnectionProvider = dynamic(() => import('components/WalletProvider'), {
  ssr: false,
});

function App({ Component, pageProps }) {
  const title = 'title';
  const description = 'description';

  const seoProps = {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <WalletConnectionProvider>
      <WalletsModalProvider>
        <DefaultSeo {...seoProps} />
        {getLayout(<Component {...pageProps} />)}
      </WalletsModalProvider>
    </WalletConnectionProvider>
  );
}

export default App;
