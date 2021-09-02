import 'tailwindcss/tailwind.css'; // eslint-disable-line import/no-extraneous-dependencies
import { DefaultSeo } from 'next-seo';

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
    <>
      <DefaultSeo {...seoProps} />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default App;
