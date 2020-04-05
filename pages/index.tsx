import { NextPage } from 'next';
import { Layout } from '../components/Layout';

const Home: NextPage<IPageProps> = ({
  title
}) => {
  console.log("TITLE: ", title);
  return (
    <Layout>
      {title}
    </Layout>
  );
}

Home.getInitialProps = async (): Promise<IPageProps> => {
  return {
    title: "Index"
  };
}

export default Home;