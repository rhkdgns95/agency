import { NextPage } from 'next';

const Home: NextPage<IPageProps> = ({
  title
}) => {
  console.log("TITLE: ", title);
  return (
    <>
      {title}
    </>
  );
}

Home.getInitialProps = async (): Promise<IPageProps> => {
  return {
    title: "Index"
  };
}

export default Home;