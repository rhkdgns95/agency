import { NextPage } from 'next';

interface IProps {
  title: string
}

const Home: NextPage<IProps> = ({
  title
}) => {
  console.log("TITLE: ", title);
  return (
    <>
      {title}
    </>
  );
}

Home.getInitialProps = async (): Promise<IProps> => {
  return {
    title: "HI"
  };
}

export default Home;