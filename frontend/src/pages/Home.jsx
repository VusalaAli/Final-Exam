import { Helmet } from "react-helmet-async";
import Header from "../layout/Header";
import Awesome from "../layout/Awesome";
import Subscribe from "../layout/Subscribe";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Header />
      <Awesome />
      <Subscribe/>
    </>
  );
};

export default Home;
