import { getLayout } from 'components/Layout';
import IndexPage from 'domains/IndexPage';

export default function Index() {
  return <IndexPage />;
}

Index.getLayout = getLayout;
