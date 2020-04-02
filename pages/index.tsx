import { NextPage } from 'next';

interface IProps {
  title: string
}

const Home: NextPage<IProps> = ({
  title
}) => (
    <>
      {title}
    </>
  );

Home.getInitialProps = async (): Promise<IProps> => {
  return {
    title: "HI"
  };
}

export default Home;