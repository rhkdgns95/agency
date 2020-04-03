import { NextPage } from 'next';
import { Dashboard } from '../templates/dashboard/Dashboard';

const Home: NextPage<IPageProps> = ({
  title
}) => {
  console.log("TITLE: ", title);
  return (
    <Dashboard>
      {title}
    </Dashboard>
  );
}

Home.getInitialProps = async (): Promise<IPageProps> => {
  return {
    title: "Index"
  };
}

export default Home;