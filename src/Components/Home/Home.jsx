import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useLocation, useNavigation } from "react-router-dom";

//  this is the main component where header, body and footer contains
const Home = () => {
  //  to submit or loading data
  const navigation = useNavigation();

  //  to locate where the user is at a certain moment
  const location = useLocation();
  
  console.log(location);
  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" ? <p>Loading....</p> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Home;
