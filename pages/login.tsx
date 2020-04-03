import { NextPage } from "next";

const Login: NextPage<IPageProps> = ({ title }) => {
  return (
    <div>
      { title }
    </div>
  );
};

Login.getInitialProps = async (): Promise<IPageProps> => {
  console.log("Login");
  return {  
    title: "Login"
  };
};

export default Login;